document.getElementById("submitBtn").addEventListener("click", async () => {
  const data = {
    discord: document.getElementById("discord").value || "--",
    first: document.getElementById("first").value || "--",
    middle: document.getElementById("middle").value || "--",
    last: document.getElementById("last").value || "--",
    age: document.getElementById("age").value || "--",
    birthday: document.getElementById("birthday").value || "--/--/----",
    eyes: document.getElementById("eyes").value,
    height: document.getElementById("height").value || "--"
  };

  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error();
    alert("Request sent successfully!");
  } catch {
    alert("Failed to send request.");
  }
});
