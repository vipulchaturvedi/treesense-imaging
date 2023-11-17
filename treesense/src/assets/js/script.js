// JavaScript code to toggle mobile menu visibility
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});