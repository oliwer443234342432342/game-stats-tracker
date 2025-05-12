const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000;

app.get('/api/stats/:username', async (req, res) => {
  const username = req.params.username;

  // dummy stats or replace with an actual real api 

  const fakeStats = {
    username,
    gamesPlayed: Math.floor(Math.random() * 1000),
    kills: Math.floor(Math.random() * 5000),
    deaths: Math.floor(Math.random() * 3000),
    winRate: (Math.random() * 100).toFixed(2) + '%'
  };

  res.json(fakeStats);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
