export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { tipo, fecha, horario, modelo, cantidad, nombre, email, telefono, acepto_terminos } = req.body;

  // Validaciones básicas
  if (!fecha || !horario || !nombre || !email || !telefono) {
    return res.status(400).json({ error: 'Campos requeridos faltantes' });
  }

  if (!acepto_terminos) {
    return res.status(400).json({ error: 'Debes aceptar términos' });
  }

  const KOMMO_TOKEN = process.env.KOMMO_API_TOKEN;
  const KOMMO_SUBDOMAIN = process.env.KOMMO_SUBDOMAIN;

  if (!KOMMO_TOKEN || !KOMMO_SUBDOMAIN) {
    console.error('Falta KOMMO_API_TOKEN o KOMMO_SUBDOMAIN en env vars');
    return res.status(500).json({ error: 'Configuración incompleta' });
  }

  try {
    // Crear lead en Kommo
    // Nota: Los custom_fields_values con field_ids específicos se pueden agregar después
    // de verificar cuáles son los IDs reales en tu cuenta Kommo.
    // Por ahora, la información se guarda en la nota interna.

    const nota_interna = `RESERVA AUTOMÁTICA:
Fecha: ${fecha}
Horario: ${horario}
Modelo: ${modelo}
Cantidad: ${cantidad}
Tipo: ${tipo}
Email: ${email}
Teléfono: ${telefono}
Aceptó términos: Sí
Creado: ${new Date().toLocaleString('es-AR')}`;

    const leadPayload = {
      name: nombre,
      responsible_user_id: 0,
      notes: nota_interna
    };

    const response = await fetch(`https://${KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KOMMO_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadPayload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Kommo error:', data);
      return res.status(response.status).json({
        error: 'Error al crear reserva en Kommo',
        details: data
      });
    }

    // Success — lead creado en Kommo
    console.log('Lead creado en Kommo:', data);

    return res.status(200).json({
      success: true,
      message: 'Reserva enviada a Kommo',
      lead_id: data._embedded?.leads?.[0]?.id
    });

  } catch (err) {
    console.error('Error en kommo-booking:', err);
    return res.status(500).json({
      error: 'Error interno al procesar reserva',
      message: err.message
    });
  }
}
