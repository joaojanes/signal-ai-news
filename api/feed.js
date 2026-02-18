export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SignalAINews/1.0)' }
    });
    const text = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
