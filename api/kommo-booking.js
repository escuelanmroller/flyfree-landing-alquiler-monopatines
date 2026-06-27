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
    // Kommo v4 requires array body for lead creation
    const leadName = `${nombre} — ${tipo || 'monopatines'} ${fecha} ${horario}`;
    const leadRes = await fetch(`${base}/leads`, {
      method: 'POST',
      headers,
      body: JSON.stringify([{
      name: leadName,
      pipeline_id: 8722923,
      status_id: 68948151
    }])
    });

    const leadData = await leadRes.json();
    if (!leadRes.ok) {
      const valErrors = leadData?.['validation-errors']?.[0]?.errors;
      console.error('Kommo lead error status:', leadRes.status);
      console.error('Kommo validation errors:', JSON.stringify(valErrors));
      console.error('Kommo full response:', JSON.stringify(leadData));
      return res.status(leadRes.status).json({ error: 'Error al crear lead en Kommo', details: leadData, validation: valErrors });
    }

    const leadId = leadData._embedded?.leads?.[0]?.id;

    if (leadId) {
      const noteText = `RESERVA AUTOMÁTICA:\nFecha: ${fecha}\nHorario: ${horario}\nModelo: ${modelo}\nCantidad: ${cantidad}\nTipo: ${tipo}\nEmail: ${email}\nTeléfono: ${telefono}\nAceptó términos: Sí`;

      // Add note with booking details
      await fetch(`${base}/leads/${leadId}/notes`, {
        method: 'POST',
        headers,
        body: JSON.stringify([{ note_type: 'common', params: { text: noteText } }])
      });

      // Create contact with phone + email
      const contactRes = await fetch(`${base}/contacts`, {
        method: 'POST',
        headers,
        body: JSON.stringify([{
          name: nombre,
          custom_fields_values: [
            { field_code: 'EMAIL', values: [{ value: email, enum_code: 'WORK' }] },
            { field_code: 'PHONE', values: [{ value: telefono, enum_code: 'WORK' }] }
          ]
        }])
      });

      if (contactRes.ok) {
        const contactData = await contactRes.json();
        const contactId = contactData._embedded?.contacts?.[0]?.id;
        if (contactId) {
          await fetch(`${base}/leads/${leadId}/links`, {
            method: 'POST',
            headers,
            body: JSON.stringify([{ to_entity_id: contactId, to_entity_type: 'contacts' }])
          });
        }
      }
    }

    return res.status(200).json({ success: true, message: 'Reserva enviada a Kommo', lead_id: leadId });

  } catch (err) {
    console.error('Error en kommo-booking:', err);
    return res.status(500).json({ error: 'Error interno al procesar reserva', message: err.message });
  }
}
