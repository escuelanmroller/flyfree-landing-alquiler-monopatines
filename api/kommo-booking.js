export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { tipo, fecha, horario, modelo, cantidad, nombre, email, telefono, acepto_terminos } = req.body;

  if (!fecha || !horario || !nombre || !email || !telefono) {
    return res.status(400).json({ error: 'Campos requeridos faltantes' });
  }
  if (!acepto_terminos) {
    return res.status(400).json({ error: 'Debes aceptar términos' });
  }

  const KOMMO_TOKEN = process.env.KOMMO_API_TOKEN;
  const KOMMO_SUBDOMAIN = process.env.KOMMO_SUBDOMAIN;

  if (!KOMMO_TOKEN || !KOMMO_SUBDOMAIN) {
    return res.status(500).json({ error: 'Configuración incompleta' });
  }

  const base = `https://${KOMMO_SUBDOMAIN}.kommo.com/api/v4`;
  const headers = {
    'Authorization': `Bearer ${KOMMO_TOKEN}`,
    'Content-Type': 'application/json'
  };

  try {
    const leadName = `${nombre} — ${tipo || 'monopatines'} ${fecha} ${horario}`;
    const noteText = `RESERVA AUTOMÁTICA:\nFecha: ${fecha}\nHorario: ${horario}\nModelo: ${modelo}\nCantidad: ${cantidad}\nTipo: ${tipo}\nEmail: ${email}\nTeléfono: ${telefono}\nAceptó términos: Sí`;

    // /leads/complex crea lead + contacto vinculado + nota en una sola llamada
    const complexRes = await fetch(`${base}/leads/complex`, {
      method: 'POST',
      headers,
      body: JSON.stringify([{
        name: leadName,
        pipeline_id: 8722923,
        status_id: 68948151,
        _embedded: {
          contacts: [{
            name: nombre,
            custom_fields_values: [
              { field_code: 'EMAIL', values: [{ value: email, enum_code: 'WORK' }] },
              { field_code: 'PHONE', values: [{ value: telefono, enum_code: 'WORK' }] }
            ]
          }],
          notes: [{
            note_type: 'common',
            params: { text: noteText }
          }]
        }
      }])
    });

    const complexData = await complexRes.json();

    if (!complexRes.ok) {
      const valErrors = complexData?.['validation-errors']?.[0]?.errors;
      console.error('Kommo complex error status:', complexRes.status);
      console.error('Kommo complex validation errors:', JSON.stringify(valErrors));
      console.error('Kommo complex full response:', JSON.stringify(complexData));
      return res.status(complexRes.status).json({
        error: 'Error al crear lead en Kommo',
        details: complexData,
        validation: valErrors
      });
    }

    // /leads/complex devuelve un array — leer el primer elemento
    const leadId = complexData[0]?.id;
    const contactId = complexData[0]?.contact_id;
    console.log('Lead creado:', leadId, '| Contacto creado:', contactId);
    console.log('Kommo response completo:', JSON.stringify(complexData));

    // Agregar nota separada — _embedded.notes en /leads/complex no funciona en Kommo
    if (leadId) {
      await fetch(`${base}/leads/${leadId}/notes`, {
        method: 'POST',
        headers,
        body: JSON.stringify([{ note_type: 'common', params: { text: noteText } }])
      });
    }

    return res.status(200).json({ success: true, message: 'Reserva enviada a Kommo', lead_id: leadId });

  } catch (err) {
    console.error('Error en kommo-booking:', err);
    return res.status(500).json({ error: 'Error interno al procesar reserva', message: err.message });
  }
}
