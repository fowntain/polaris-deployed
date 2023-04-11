// This script redirects returning visitors to the home page

// Check if the cookie exists
if (document.cookie.indexOf("visited") >= 0) {
  // Redirect to a different page
  window.location.href = "/html/home.html";
} else {
  // Set a cookie to mark the user as visited
  document.cookie = "visited=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
}
