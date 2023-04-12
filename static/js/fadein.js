window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 1000);
})

window.onbeforeunload = () => {
  document.body.style.opacity = '0.5';
}

document.querySelectorAll('a').forEach(hyperlink => {
  hyperlink.onclick = (e) => {
    e.preventDefault();
    document.body.style.opacity = '0.5';

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }
})