async function getStats() {
  const username = document.getElementById('username').value;
  if (!username) return alert('Enter a username!');

  const res = await fetch(`http://localhost:3000/api/stats/${username}`);
  const stats = await res.json();

  const display = `
    <h3>Stats for ${stats.username}</h3>
    <p>Games Played: ${stats.gamesPlayed}</p>
    <p>Kills: ${stats.kills}</p>
    <p>Deaths: ${stats.deaths}</p>
    <p>Win Rate: ${stats.winRate}</p>
  `;

  document.getElementById('statsDisplay').innerHTML = display;
}
