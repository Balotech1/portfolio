// ==========================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ==========================
// HERO SLIDESHOW
// ==========================
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-image img');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? 'block' : 'none';
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 5000); // Change every 5 seconds
}

// Start slideshow if images exist
if(slides.length > 0) {
  showSlides();
}

// ==========================
// BUTTON HOVER EFFECTS
// ==========================
const buttons = document.querySelectorAll('.btn, .btn-header');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.opacity = 0.8;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.opacity = 1;
  });
});