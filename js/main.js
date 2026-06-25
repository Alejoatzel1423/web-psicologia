// PsicoVida Colombia — Main JS
(function() {
  'use strict';

  // Menú móvil
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('nav--open');
      toggle.textContent = nav.classList.contains('nav--open') ? '✕' : '☰';
    });

    // Cerrar menú al hacer clic en un enlace
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('nav--open');
        toggle.textContent = '☰';
      });
    });
  }

  // Cerrar menú al hacer scroll
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    if (nav && nav.classList.contains('nav--open')) {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll + 20) {
        nav.classList.remove('nav--open');
        if (toggle) toggle.textContent = '☰';
      }
      lastScroll = currentScroll;
    }
  }, { passive: true });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
