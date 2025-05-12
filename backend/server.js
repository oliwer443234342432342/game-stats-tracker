const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/stats/:username', (req, res) => {
  const username = req.params.username;
  res.json({
    username,
    gamesPlayed: 427,
    kills: 1589,
    deaths: 932,
    winRate: "67.42%"
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
