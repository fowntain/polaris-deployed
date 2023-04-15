const spinner = document.getElementById('spinner-container');
spinner.innerHTML = '<div class="spinner"></div>';

fetch('/assets/JSON/games.json')
    .then((response) => response.json())
    .then((data) => {
        const container = document.getElementById('card-container');
        for (const game of data) {
            const card = document.createElement('div');
            card.classList.add('card');
            const link = document.createElement('a');
            const image = document.createElement('img');
            image.classList.add('cardimage');
            image.src = game.image;
            const name = document.createElement('p');
            name.classList.add('cardname');
            name.textContent = game.name;
            link.appendChild(image);
            link.appendChild(name);
            card.appendChild(link);
            container.appendChild(card);
        }

        spinner.remove();
    })
    .catch((error) => {
        spinner.remove();
        console.error(error);
    });