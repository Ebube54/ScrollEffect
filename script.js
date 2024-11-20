// Select the navbar
const navbar = document.querySelector('.navbar');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
