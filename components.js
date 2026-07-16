// ============================================================
// COMPONENTS.JS - Shared Header & Footer Injector
// ============================================================

function getActivePage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function buildHeader() {
  const active = getActivePage();
  const navHTML = SITE.nav.map(item => {
    const isActive = active === item.href;
    if (item.dropdown) {
      const ddLinks = item.dropdown.map(d =>
        `<a class="dropdown-link" href="${d.href}">${d.label}</a>`
      ).join('');
      return `
        <li class="nav-item">
          <span class="nav-link ${isActive ? 'active' : ''}" onclick="location.href='${item.href}'">
            ${item.label} <span class="chevron">&#9660;</span>
          </span>
          <div class="dropdown">${ddLinks}</div>
        </li>`;
    }
    return `
      <li class="nav-item">
        <a class="nav-link ${isActive ? 'active' : ''}" href="${item.href}">${item.label}</a>
      </li>`;
  }).join('');

  // Mobile nav
  const mobileNavHTML = SITE.nav.map(item => {
    if (item.dropdown) {
      const ddLinks = item.dropdown.map(d =>
        `<a class="dropdown-link" href="${d.href}">${d.label}</a>`
      ).join('');
      return `
        <li class="nav-item mobile-has-dropdown">
          <span class="nav-link" onclick="toggleMobileDropdown(this)">
            ${item.label} <span class="chevron">&#9660;</span>
          </span>
          <div class="mobile-dropdown">${ddLinks}</div>
        </li>`;
    }
    return `
      <li class="nav-item">
        <a class="nav-link" href="${item.href}">${item.label}</a>
      </li>`;
  }).join('');

  const html = `
    <header id="site-header">
      <div class="header-inner">
        <a class="logo-wrap" href="index.html">
          <img src="images/logo.png" alt="SS Firms Logo" style="height:70px;width:auto;object-fit:contain;" id="header-logo" onerror="this.onerror=null;this.style.display='none';document.getElementById('logo-fallback-text').style.display='inline';">
          <span class="logo-text" id="logo-fallback-text" style="display:none;">SS FIRMS</span>
        </a>
        <nav>
          <ul class="nav-list">${navHTML}</ul>
        </nav>
        <button class="hamburger" id="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" id="mobile-nav">
        <ul>${mobileNavHTML}</ul>
      </nav>
    </header>`;
  document.body.insertAdjacentHTML('afterbegin', html);
}


function buildFooter() {
  const qLinks = SITE.footer.quickLinks.map(l =>
    `<li><a class="footer-link" href="${l.href}"><i class="fas fa-angle-double-right"></i>${l.label}</a></li>`
  ).join('');
  const sLinks = SITE.footer.services.map(l =>
    `<li><a class="footer-link" href="${l.href}"><i class="fas fa-angle-double-right"></i>${l.label}</a></li>`
  ).join('');
  const iLinks = SITE.footer.industries.map(l =>
    `<li><a class="footer-link" href="${l.href}"><i class="fas fa-angle-double-right"></i>${l.label}</a></li>`
  ).join('');

  const html = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <!-- Brand -->
          <div class="footer-brand">
            <div class="footer-logo-wrap">
              <img src="images/logo.png" alt="SS Firms" id="footer-logo-img" onerror="this.onerror=null;this.style.display='none';document.getElementById('footer-logo-fallback').style.display='inline';">
              <span class="footer-logo-text" id="footer-logo-fallback" style="display:none;">SS FIRMS</span>
            </div>
            <p class="footer-about">${SITE.footer.about}</p>
            <div class="footer-social">
              <a class="social-btn" href="${SITE.social.facebook}" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a class="social-btn" href="${SITE.social.whatsapp}" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
              <a class="social-btn" href="${SITE.social.linkedin}" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a class="social-btn" href="${SITE.social.twitter}" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
            </div>
          </div>
          <!-- Quick Link -->
          <div>
            <h4 class="footer-col-title">Quick Link</h4>
            <ul class="footer-link-list">${qLinks}</ul>
          </div>
          <!-- Services -->
          <div>
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-link-list">${sLinks}</ul>
          </div>
          <!-- Industries -->
          <div>
            <h4 class="footer-col-title">Industries</h4>
            <ul class="footer-link-list">${iLinks}</ul>
          </div>
          <!-- Address -->
          <div>
            <div class="footer-contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>${SITE.subpageAddress.usa}</span>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-phone-alt"></i>
              <span>${SITE.subpageAddress.phone}</span>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-envelope"></i>
              <span>${SITE.subpageAddress.email}</span>
            </div>
          </div>
        </div>
        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <span>${SITE.footer.copyright}</span>
          <span>Designed by <a href="${SITE.footer.designedByLink}" target="_blank">HiIdeals</a></span>
        </div>
      </div>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

function buildLightbox() {
  const html = `
    <div class="lightbox-overlay" id="lightbox-overlay" onclick="closeLightbox(event)">
      <div class="lightbox-inner" id="lightbox-inner">
        <button class="lightbox-close" onclick="closeLightbox()">&#10005;</button>
        <iframe id="lightbox-iframe" src="" allowfullscreen></iframe>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// Mobile nav toggle
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function toggleMobileDropdown(el) {
  const dd = el.nextElementSibling;
  dd.classList.toggle('open');
  const chevron = el.querySelector('.chevron');
  if (chevron) chevron.style.transform = dd.classList.contains('open') ? 'rotate(180deg)' : '';
}

// Lightbox
function openLightbox(videoSrc) {
  const overlay = document.getElementById('lightbox-overlay');
  const iframe = document.getElementById('lightbox-iframe');
  iframe.src = videoSrc + '?autoplay=1';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox-overlay') && !e.target.classList.contains('lightbox-close')) return;
  const overlay = document.getElementById('lightbox-overlay');
  const iframe = document.getElementById('lightbox-iframe');
  overlay.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}

// Scroll Animations
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// Header scroll shadow
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.14)';
    } else {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    }
  });
}

// Init all shared components
document.addEventListener('DOMContentLoaded', () => {
  buildHeader();
  buildFooter();
  buildLightbox();
  initScrollAnimations();
  initHeaderScroll();
});
