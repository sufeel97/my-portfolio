// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggleButton && navList) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on link click (mobile UX)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        navToggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Reveal on scroll (simple)
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Contact form validation and fake submit
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = /** @type {HTMLInputElement} */ (document.getElementById('name'));
    const email = /** @type {HTMLInputElement} */ (document.getElementById('email'));
    const message = /** @type {HTMLTextAreaElement} */ (document.getElementById('message'));

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');
    const status = document.getElementById('formStatus');

    if (errorName) errorName.textContent = '';
    if (errorEmail) errorEmail.textContent = '';
    if (errorMessage) errorMessage.textContent = '';
    if (status) status.textContent = '';

    let valid = true;
    if (!name.value.trim()) { valid = false; if (errorName) errorName.textContent = '이름을 입력해주세요.'; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      valid = false; if (errorEmail) errorEmail.textContent = '올바른 이메일을 입력해주세요.';
    }

    if (!message.value.trim()) { valid = false; if (errorMessage) errorMessage.textContent = '메시지를 입력해주세요.'; }

    if (!valid) return;

    // Simulate sending
    if (status) {
      status.textContent = '메시지를 전송했어요! 빠르게 답장드릴게요.';
    }
    form.reset();
  });
}


