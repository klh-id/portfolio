(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const syncThemeButton = () => {
    if (!themeButton) return;
    const light = root.dataset.theme === 'light';
    themeButton.setAttribute('aria-pressed', String(light));
    themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    themeButton.title = light ? 'Switch to dark mode' : 'Switch to light mode';
    themeButton.querySelector('[data-theme-label]').textContent = light ? 'Dark mode' : 'Light mode';
  };
  syncThemeButton();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) { /* Storage is optional. */ }
    syncThemeButton();
  });
  window.addEventListener('storage', event => {
    if (event.key === 'portfolio-theme') {
      root.dataset.theme = event.newValue === 'light' ? 'light' : 'dark';
      syncThemeButton();
    }
  });
  // Without JavaScript the complete navigation remains visible.
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('#navigation');
  if (menuButton && navigation) {
    root.classList.add('has-menu');
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      navigation.classList.toggle('is-open', open);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu(); menuButton.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
  }
  document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => {
      document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
    });
  });
})();

// Samples stay on the current page; native dialogs provide focus containment and Escape support.
(() => {
  const dialog = document.querySelector('.sample-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const body = dialog.querySelector('.lightbox-body');
  const title = dialog.querySelector('#lightbox-title');
  const closeButton = dialog.querySelector('.lightbox-close');
  let opener;
  document.querySelectorAll('[data-sample]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const template = document.getElementById('sample-' + link.dataset.sample);
      if (!template) return;
      event.preventDefault();
      opener = link;
      title.textContent = link.dataset.sampleTitle;
      body.replaceChildren(template.content.cloneNode(true));
      body.querySelectorAll('img').forEach(img => { img.loading = 'eager'; });
      document.documentElement.classList.add('lightbox-open');
      dialog.showModal();
      dialog.scrollTop = 0;
      closeButton.focus({ preventScroll: true });
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    body.querySelectorAll('video').forEach(video => video.pause());
    body.replaceChildren();
    document.documentElement.classList.remove('lightbox-open');
    if (opener?.isConnected) opener.focus({ preventScroll: true });
  });
})();
