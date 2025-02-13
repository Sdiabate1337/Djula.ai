// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('animate-fade-in');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('animate-fade-in');
        }
    });

    // Fermer le menu mobile lors du clic sur un lien
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});

// Animation du header au scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('shadow-lg');
        return;
    }

    if (currentScroll > lastScroll) {
        // Scroll vers le bas
        header.classList.add('shadow-lg');
    } else {
        // Scroll vers le haut
        header.classList.remove('shadow-lg');
    }

    lastScroll = currentScroll;
});

// Animation des éléments au scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Sélectionner tous les éléments à animer
document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
});