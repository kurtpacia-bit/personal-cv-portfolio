const doc = document.documentElement;
const body = document.body;

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('is-visible');
  });

  setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => toast.remove(), 250);
  }, 2200);
}

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const minDelay = 900;
  const maxDelay = 2500;
  const start = performance.now();

  const finish = () => {
    const elapsed = performance.now() - start;
    const remaining = Math.max(0, minDelay - elapsed);
    setTimeout(() => {
      loader.classList.add('is-hidden');
      setTimeout(() => {
        loader.remove();
        initHeroEntrance();
      }, 450);
    }, Math.min(remaining, maxDelay));
  };

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish, { once: true });
  }
}

function initHeroEntrance() {
  const heroElements = document.querySelectorAll('.hero h1, .hero h2, .hero .lead, .hero__actions, .social-links, .hero__visual');
  heroElements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 120}ms`;
    element.classList.add('is-visible');
  });
}

function applyTheme(theme) {
  doc.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.warn('Theme storage unavailable:', error);
  }
}

function initThemeToggle() {
  const toggles = document.querySelectorAll('.theme-toggle');
  const currentTheme = doc.getAttribute('data-theme') || 'light';

  toggles.forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });

  if (currentTheme === 'dark') {
    doc.setAttribute('data-theme', 'dark');
  }
}

function initMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const backdrop = document.querySelector('.mobile-menu-backdrop');
  const menuButton = document.querySelector('.menu-button');
  const closeButton = document.querySelector('.menu-close');
  const links = document.querySelectorAll('.mobile-menu__link');

  if (!menu || !backdrop || !menuButton) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
    backdrop.hidden = true;
  };

  const openMenu = () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    menuButton.setAttribute('aria-expanded', 'true');
    backdrop.hidden = false;
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.contains('is-open');
    if (isOpen) closeMenu(); else openMenu();
  });

  closeButton?.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

function initRevealObserver() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => observer.observe(element));
}

function initScrollTracker() {
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.trail__link')];
  const root = document.documentElement;

  function updateProgress() {
    const scrollY = window.scrollY + window.innerHeight * 0.35;
    let activeId = sections[0]?.id || 'top';

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        activeId = section.id;
      }
    });

    links.forEach((link) => {
      const anchor = link.getAttribute('href');
      const isMatch = anchor === `#${activeId}`;
      link.classList.toggle('is-active', isMatch);
      link.classList.toggle('is-passed', !!anchor && anchor !== '#top' && sectionExistsBefore(anchor.slice(1), activeId));
      if (isMatch) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    const activeIndex = links.findIndex((link) => link.classList.contains('is-active'));
    const progress = activeIndex >= 0 ? ((activeIndex + 1) / links.length) * 100 : 0;
    root.style.setProperty('--progress', `${progress}%`);
  }

  function sectionExistsBefore(targetId, activeId) {
    const targetIndex = sections.findIndex((section) => section.id === targetId);
    const activeIndex = sections.findIndex((section) => section.id === activeId);
    return targetIndex >= 0 && activeIndex >= 0 && targetIndex < activeIndex;
  }

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  };

  updateProgress();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initCopyEmail() {
  const button = document.getElementById('copy-email');
  if (!button) return;

  button.addEventListener('click', async () => {
    const email = button.closest('.contact-panel')?.querySelector('.contact-email')?.textContent?.trim();
    if (!email) {
      showToast('Email not available.');
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard.');
    } catch (error) {
      showToast('Copy failed. Please copy the email manually.');
    }
  });
}

function initPdfButton() {
  const button = document.getElementById('save-pdf');
  if (!button) return;

  button.addEventListener('click', () => {
    const revealTargets = document.querySelectorAll('.reveal, .timeline-item, .skill-row');
    revealTargets.forEach((element) => element.classList.add('is-visible'));
    window.print();
  });
}

async function fetchGitHubStats() {
  const username = document.body.dataset.githubUsername || 'Kenth08';
  const panel = document.querySelector('.github-panel');
  if (!panel) return;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('GitHub request failed');
    const data = await response.json();

    const statsRow = panel.querySelector('.github-stats');
    if (!statsRow) return;

    const publicRepos = panel.querySelector('[data-github="public_repos"]');
    const followers = panel.querySelector('[data-github="followers"]');
    const createdAt = panel.querySelector('[data-github="created_at"]');

    if (publicRepos) publicRepos.textContent = data.public_repos ?? '0';
    if (followers) followers.textContent = data.followers ?? '0';
    if (createdAt) createdAt.textContent = data.created_at ? new Date(data.created_at).getFullYear() : 'N/A';

    statsRow.hidden = false;
  } catch (error) {
    const statsRow = panel.querySelector('.github-stats');
    if (statsRow) statsRow.remove();
  }
}

function init() {
  initLoader();
  initThemeToggle();
  initMobileMenu();
  initRevealObserver();
  initScrollTracker();
  initCopyEmail();
  initPdfButton();
  fetchGitHubStats();
  if (document.body.dataset.githubUsername) {
    fetchGitHubStats();
  }
}

document.addEventListener('DOMContentLoaded', init);
