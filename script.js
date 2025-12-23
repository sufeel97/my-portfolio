// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', '메뉴 열기');
    }
  });

  // Close menu when clicking nav link
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', '메뉴 열기');
    });
  });
}

// Reveal animation on scroll
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

reveals.forEach(el => revealObserver.observe(el));

// Category filtering
const categoryLinks = document.querySelectorAll('.category-list a[data-category]');
const postCards = document.querySelectorAll('.post-card[data-category]');

categoryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.dataset.category;

    // Update active state
    categoryLinks.forEach(l => l.style.fontWeight = '');
    link.style.fontWeight = '700';

    // Filter posts
    postCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
        // Re-trigger animation
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 10);
      } else {
        card.style.display = 'none';
      }
    });

    // Scroll to posts section smoothly
    const postsSection = document.querySelector('.posts-grid');
    if (postsSection) {
      postsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Calculate reading time (simple estimation)
function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

// Add smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Highlight current section in navigation
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

function highlightNavigation() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.style.color = 'var(--accent)';
      link.style.fontWeight = '600';
    }
  });
}

window.addEventListener('scroll', highlightNavigation);
highlightNavigation(); // Initial call

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.3s ease';

  if (img.complete) {
    img.style.opacity = '1';
  } else {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
  }
});

// Search functionality (optional - simple client-side search)
function addSearchFeature() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    postCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();

      if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// Initialize search if element exists
addSearchFeature();

console.log('✨ 블로그가 준비되었습니다!');
