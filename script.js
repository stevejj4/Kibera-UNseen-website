// JavaScript for interactive features can be added here
console.log('Welcome to Kibera UNseen!');

// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
