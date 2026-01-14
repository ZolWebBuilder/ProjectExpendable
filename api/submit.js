export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    discord,
    first,
    middle,
    last,
    age,
    birthday,
    eyes,
    height
  } = req.body;

  const embed = {
    title: "🪪 New Expendable Card Request",
    color: 16711680,
    fields: [
      { name: "Discord", value: discord, inline: false },
      { name: "First Name", value: first, inline: true },
      { name: "Middle Name", value: middle, inline: true },
      { name: "Last Name", value: last, inline: true },
      { name: "Age", value: age, inline: true },
      { name: "Birthday", value: birthday, inline: true },
      { name: "Eyes", value: eyes, inline: true },
      { name: "Height (cm)", value: height, inline: true }
    ],
    timestamp: new Date()
  };

  await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] })
  });

  res.status(200).json({ success: true });
}
