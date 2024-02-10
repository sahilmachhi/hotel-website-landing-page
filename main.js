let navBtn = document.getElementById('menu-btn');
let navbarLinks = document.querySelector('.navbar-links');
let navClicked = document.querySelectorAll('a');


navBtn.addEventListener('click', function () {
  navbarLinks.classList.toggle('navbar-links-active');
});

navClicked.forEach(navClick => {
  navClick.addEventListener('click', function () {
    console.log("clicked");
    navbarLinks.classList.toggle('navbar-links-active');
  });
});
