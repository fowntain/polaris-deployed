function openSidebar() {
  document.querySelector('.sidebar').classList.toggle('open-sidebar');
}

javascript:(function () { var script = document.createElement('script'); script.src="https://cdnjs.cloudflare.com/ajax/libs/eruda/2.11.3/eruda.js"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();