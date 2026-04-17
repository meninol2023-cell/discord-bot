const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot de música online 🎵");
});

app.listen(PORT, () => {
  console.log(`Keep Alive rodando na porta ${PORT}`);
});
