fetch('games.json')
  .then(response => response.json())
  .then(data => {
    data.cards.sort((a, b) => a.name.localeCompare(b.name));
    const cardsHtml = data.cards.map(card => `
      <a href="#" onclick="localStorage.setItem('currentgame', '${card.source}'); window.location.href = 'play';">
      <div class="card">
        <h3>${card.name}</h3>
        <p>${card.value}</p>
      </div>
      <a>
    `).join('');
    const container = document.getElementById('cards-container');
    container.innerHTML = cardsHtml;
  });
