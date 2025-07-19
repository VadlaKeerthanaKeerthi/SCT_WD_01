// Change navbar style on scroll
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle mobile menu
function toggleMenu() {
  navLinks.classList.toggle('active');
}
