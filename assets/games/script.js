fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.cards.sort((a, b) => a.name.localeCompare(b.name));
    const cardsHtml = data.cards.map(card => `
      <div class="card">
        <h3>${card.name}</h3>
        <p>${card.value}</p>
      </div>
    `).join('');
    const container = document.getElementById('cards-container');
    container.innerHTML = cardsHtml;
  });
