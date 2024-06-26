/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== SCROLL HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);
function sendEmail() {
  window.location.href = "mailto:saxenavarnit.code7@gmail.com";
}
/*=============== FETCH PRODUCTS ===============*/
document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/products')
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      // Now you can use the products data to dynamically update the HTML content
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
});
