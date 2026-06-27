export default async function handler(req, res) {
  const KOMMO_TOKEN = process.env.KOMMO_API_TOKEN;
  const KOMMO_SUBDOMAIN = process.env.KOMMO_SUBDOMAIN;

  if (!KOMMO_TOKEN || !KOMMO_SUBDOMAIN) {
    return res.status(500).json({ error: 'Configuración incompleta' });
  }

  const response = await fetch(`https://${KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads/pipelines`, {
    headers: { 'Authorization': `Bearer ${KOMMO_TOKEN}` }
  });

  const data = await response.json();
  return res.status(200).json(data);
}
