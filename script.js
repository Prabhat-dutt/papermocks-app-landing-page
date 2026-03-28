document.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.glow-point');
  const x = e.clientX;
  const y = e.clientY;

  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;
});

// Add subtle entry animations for cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Update dynamic styling for visibility
const style = document.createElement('style');
style.textContent = `
    .card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

console.log("%c🚀 Papermocks Landing Page - Powered by Advanced Agentic Coding", "color: #10b981; font-weight: bold; font-size: 14px;");
