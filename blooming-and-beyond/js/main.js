/* ============================================================
   Blooming & Beyond — Main JavaScript
   Author: [Your Name]
   Site:   bloomingandbeyond.com
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Category Pill Toggle ──────────────────────────────── */
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  /* ── Newsletter Form ───────────────────────────────────── */
  const nlBtn   = document.getElementById('nl-submit');
  const nlEmail = document.getElementById('nl-email');

  if (nlBtn && nlEmail) {
    nlBtn.addEventListener('click', () => {
      if (nlEmail.value.includes('@')) {
        nlEmail.value = '';
        nlEmail.placeholder = "You're in! Welcome to the community 🌸";
        nlEmail.style.color = '#B87333';
      } else {
        nlEmail.placeholder = 'Please enter a valid email address';
        nlEmail.style.borderColor = '#B87333';
      }
    });
  }

  /* ── Scroll Fade-In Animations ─────────────────────────── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ── Smooth Nav Active State on Scroll ─────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active-nav');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-nav');
      }
    });
  });

  /* ── Mobile Nav Toggle ─────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  /* ── Pinterest Save Button ─────────────────────────────── */
  document.querySelectorAll('.pin-save').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = '✓ Saved!';
      btn.style.background = '#6B8F3A';
      setTimeout(() => {
        btn.textContent = '📌 Save';
        btn.style.background = '#E60023';
      }, 2000);
    });
  });

  /* ── Search Bar ────────────────────────────────────────── */
  const searchInput = document.querySelector('.nav-search');
  if (searchInput) {
    searchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        // Replace with your actual search page URL when ready
        alert(`Searching for: "${searchInput.value}" — Search page coming soon!`);
      }
    });
  }

});
