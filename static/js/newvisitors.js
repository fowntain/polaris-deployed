if (document.cookie.indexOf('visited') >= 0) {
  window.location.href = '/html/home.html';
} else {
  document.cookie = 'visited=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/';
}