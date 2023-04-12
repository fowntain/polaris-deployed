const form = document.querySelector('form');
const address = document.querySelector('#url');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (e) {
    console.error(e);
  }

  const url = search(address.value, 'https://www.google.com/search?q=%s');
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
