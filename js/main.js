window.onscroll = function () {
    scrolledWindow()
}

function scrolledWindow() {
    const nav = document.querySelector('#main-menu');
    const top = document.body.scrollTop | document.documentElement.scrollTop; /*az egyik biztos működik a böngészőben*/
   if (top != 0) {
        nav.classList.add('scrolled-navbar');
   } else {
       nav.classList.remove('scrolled-navbar');
   }
}
