const gamedata = JSON.parse(localStorage.getItem('gamedata'));

document.getElementById('logo-options').textContent = gamedata.name;
document.getElementById('game-icon-sm').src = gamedata.imgurl;
document.getElementById('game-frame').src = gamedata.gameurl;
