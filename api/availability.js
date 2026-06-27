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
    // 1. Get current user URI
    const meRes = await fetch('https://api.calendly.com/users/me', { headers });
    if (!meRes.ok) return res.status(meRes.status).json({ error: 'Auth failed' });
    const meData = await meRes.json();
    const userUri = meData.resource.uri;

    // 2. Get event types for this user
    const etRes = await fetch(`https://api.calendly.com/event_types?user=${encodeURIComponent(userUri)}&active=true`, { headers });
    if (!etRes.ok) return res.status(etRes.status).json({ error: 'Failed to fetch event types' });
    const etData = await etRes.json();

    // Find the alquiler-venta event type by slug
    const eventType = etData.collection.find(e => e.scheduling_url.includes('alquiler-venta'));
    if (!eventType) return res.status(404).json({ error: 'Event type not found' });

    // 3. Get available times for next 14 days
    const startTime = new Date().toISOString();
    const endTime = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();

    const avRes = await fetch(
      `https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(eventType.uri)}&start_time=${encodeURIComponent(startTime)}&end_time=${encodeURIComponent(endTime)}`,
      { headers }
    );
    if (!avRes.ok) return res.status(avRes.status).json({ error: 'Failed to fetch availability' });
    const avData = await avRes.json();

    // 4. Transform to { 'YYYY-MM-DD': { 'HH:MM': true } }
    const availability = {};
    avData.collection.forEach(slot => {
      if (!slot.status || slot.status === 'available') {
        const date = slot.start_time.substring(0, 10);
        // Convert UTC to Argentina time (UTC-3)
        const utcHour = new Date(slot.start_time);
        utcHour.setHours(utcHour.getHours() - 3);
        const time = `${String(utcHour.getHours()).padStart(2, '0')}:${String(utcHour.getMinutes()).padStart(2, '0')}`;
        if (!availability[date]) availability[date] = {};
        availability[date][time] = true;
      }
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
