export default function handler(req, res) {
  // 🔥 CORS HEADERS (ALLOW ANY ORIGIN)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request (IMPORTANT for CORS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  // Read body
  const { regions, threshold_ms } = req.body || {};

  return res.status(200).json({
    received: true,
    regions,
    threshold_ms
  });
}
