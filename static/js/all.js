$('#loadnav').load(`${location.protocol}//${location.host}/misc/nav.html`);

if (!sessionStorage.getItem('loaderPlayed')) {
  setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
    }, 1500);
    sessionStorage.setItem('loaderPlayed', 'true');
  }, 3000);
} else {
    if (document.getElementById('loader')) {
        document.getElementById('loader').style.display = 'none';
    }
}

function credits() {
  document.getElementById('credits').style.animation = 'fadeIn 1s';
  document.getElementById('credits').style.display = 'block';
  document.querySelector('#clickbox').addEventListener('click', function(e) {
    if (e.target.id == 'clickbox') {
      closeCredits();
    }
  });
}

function closeCredits() {
  document.getElementById('credits').style.animation = 'fadeOut 1s';
  setTimeout(function() {
    document.getElementById('credits').style.display = 'none';
  }, 1000);
}
