// ========== Smooth Scrolling for Navigation ==========
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target){
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// ========== Placeholder for Hero / Cards Interactivity ==========
document.addEventListener('DOMContentLoaded', () => {
  // Example: hover effect placeholder
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});

// ========== Optional: CTA Button Alert ==========
const ctaButton = document.querySelector('.cta .btn.primary');
if(ctaButton){
  ctaButton.addEventListener('click', () => {
    alert('This will open the project inquiry form (placeholder).');
  });
});