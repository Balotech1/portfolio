// ============================
// SMOOTH SCROLLING FOR NAV LINKS
// ============================
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // adjust for sticky header
        behavior: 'smooth'
      });
    }
  });
});

// ============================
// HERO SECTION ANIMATION
// ============================
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');

  heroText.style.opacity = 0;
  heroImage.style.opacity = 0;

  setTimeout(() => {
    heroText.style.transition = 'opacity 1.5s ease-in-out';
    heroImage.style.transition = 'opacity 1.5s ease-in-out';
    heroText.style.opacity = 1;
    heroImage.style.opacity = 1;
  }, 300);
});

// ============================
// OPTIONAL: SCROLL-TO-TOP BUTTON
// ============================
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.id = 'scrollTopBtn';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 18px;
  background-color: #3f78ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: none;
  font-size: 1.2rem;
  z-index: 1000;
`;
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});