export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const CALENDLY_TOKEN = process.env.CALENDLY_API_KEY;
  if (!CALENDLY_TOKEN) return res.status(500).json({ error: 'Missing API key' });

  const headers = {
    'Authorization': `Bearer ${CALENDLY_TOKEN}`,
    'Content-Type': 'application/json'
  };

  try {
    // Extraer user UUID del JWT sin necesitar el scope users:read
    const tokenPayload = JSON.parse(Buffer.from(CALENDLY_TOKEN.split('.')[1], 'base64').toString());
    const userUri = `https://api.calendly.com/users/${tokenPayload.user_uuid}`;

    // 2. Get event types for this user
    const etRes = await fetch(`https://api.calendly.com/event_types?user=${encodeURIComponent(userUri)}&active=true`, { headers });
    if (!etRes.ok) return res.status(etRes.status).json({ error: 'Failed to fetch event types' });
    const etData = await etRes.json();

    // Find the alquiler-venta event type by slug
    const eventType = etData.collection.find(e => e.scheduling_url.includes('alquiler-venta'));
    if (!eventType) return res.status(404).json({ error: 'Event type not found' });

    // 3. Get available times — Calendly limit: 7 days per call, start must be tomorrow+
    // Use tomorrow midnight UTC to avoid "start_time must be in the future" rejection
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(0, 0, 0, 0);
    const week1Start = tomorrow.toISOString();
    const week1End = new Date(tomorrow.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();
    const week2End = new Date(tomorrow.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString();

    const [avRes1, avRes2] = await Promise.all([
      fetch(`https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(eventType.uri)}&start_time=${encodeURIComponent(week1Start)}&end_time=${encodeURIComponent(week1End)}`, { headers }),
      fetch(`https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(eventType.uri)}&start_time=${encodeURIComponent(week1End)}&end_time=${encodeURIComponent(week2End)}`, { headers })
    ]);

    if (!avRes1.ok) return res.status(avRes1.status).json({ error: 'Failed to fetch availability week 1' });
    if (!avRes2.ok) return res.status(avRes2.status).json({ error: 'Failed to fetch availability week 2' });

    const [avData1, avData2] = await Promise.all([avRes1.json(), avRes2.json()]);
    const allSlots = [...(avData1.collection || []), ...(avData2.collection || [])];

    // 4. Transform to { 'YYYY-MM-DD': { 'HH:MM': true } } — Argentina time (UTC-3)
    const availability = {};
    allSlots.forEach(slot => {
      const localDate = new Date(slot.start_time);
      localDate.setHours(localDate.getHours() - 3);
      const date = localDate.toISOString().substring(0, 10);
      const time = `${String(localDate.getHours()).padStart(2, '0')}:${String(localDate.getMinutes()).padStart(2, '0')}`;
      if (!availability[date]) availability[date] = {};
      availability[date][time] = true;
    });

    res.status(200).json({
      availability,
      schedulingUrl: eventType.scheduling_url
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}
