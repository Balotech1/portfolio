// ===============================
// script.js
// ===============================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

  // ===============================
  // Smooth Scroll for nav links
  // ===============================
  const navLinks = document.querySelectorAll('header nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // header offset
          behavior: 'smooth'
        });
      }
    });
  });

  // ===============================
  // Sticky Header on scroll
  // ===============================
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if(window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // ===============================
  // Scroll Reveal Animation
  // ===============================
  const sections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom) {
        section.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // trigger on load

  // ===============================
  // Optional: Back to Top Button
  // ===============================
  const backToTop = document.createElement('button');
  backToTop.id = 'back-to-top';
  backToTop.innerHTML = '↑';
  document.body.appendChild(backToTop);
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 18px;
    border: none;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    display: none;
    z-index: 999;
  `;
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

});