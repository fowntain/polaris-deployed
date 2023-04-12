const likebtn = document.querySelector('.fa-thumbs-up');
const favoritebtn = document.querySelector('.fa-heart');

function like() {
  if (likebtn.style.color === 'rgb(255, 255, 255)' || likebtn.style.color === '') {
    likebtn.style.color = '#ebe052';
  } else {
    likebtn.style.color = '#ffffff';
  }
}

function favorite() {
  if (favoritebtn.style.color === 'rgb(255, 255, 255)' || favoritebtn.style.color === '') {
    favoritebtn.style.color = '#c72e47';
  } else {
    favoritebtn.style.color = '#ffffff';
  }
}

likebtn.addEventListener('click', like);
favoritebtn.addEventListener('click', favorite);