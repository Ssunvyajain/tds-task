
export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({ message: "success" });
  }

  return res.status(405).json({ error: "Only POST allowed" });
}
