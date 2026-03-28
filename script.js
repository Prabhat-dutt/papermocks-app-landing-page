// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve once animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate as you scroll
const animElements = [
    ...document.querySelectorAll('.feature-card'),
    ...document.querySelectorAll('.hero-content'),
    ...document.querySelectorAll('.stat-box'),
    ...document.querySelectorAll('.status-summary')
];

animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1), transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)';
    observer.observe(el);
});

// Create dynamic styles for triggered state
const style = document.createElement('style');
style.textContent = `
    .feature-card.visible, .hero-content.visible, .stat-box.visible, .status-summary.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Ensure immediate visibility for hero section (above fold) */
    .hero-content { 
        opacity: 1 !important; 
        transform: translateY(0) !important; 
    }
`;
document.head.appendChild(style);

// No custom cursor logic - letting the OS handle it normally for a clean experience.

console.log("%c🚀 Papermocks Dashboard Landing - High Fidelity Build", "color: #10b981; font-weight: bold; font-size: 14px; padding: 4px;");