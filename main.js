let navBtn = document.getElementById('menu-btn');
let navbarLinks = document.querySelector('.navbar-links');

navBtn.addEventListener('click', function () {
  navbarLinks.classList.toggle('navbar-links-active');
});
