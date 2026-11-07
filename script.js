// Content and navigation work without JavaScript.
const printButton = document.querySelector('[data-print]');
if (printButton && typeof window.print === 'function') {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

// Native dialog keeps image viewing on the same page, with Escape and focus return.
if (typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype.showModal === 'function') {
  const viewer = document.createElement('dialog');
  viewer.className = 'image-viewer';
  viewer.setAttribute('aria-label', 'Image viewer');
  viewer.innerHTML = '<div class="image-viewer-content"><div class="image-viewer-toolbar"><p>Image preview · Press Escape to return</p><button class="image-viewer-close" type="button" aria-label="Close image preview" autofocus><span aria-hidden="true">×</span> Close</button></div><img alt=""></div>';
  const preview = viewer.querySelector('img');
  const closeButton = viewer.querySelector('button');
  let opener = null;
  const imageLinks = new Map();

  document.querySelectorAll('main img').forEach((img) => {
    let link = img.closest('a');
    if (!link) {
      link = document.createElement('a');
      link.href = img.src;
      img.before(link);
      link.append(img);
    }
    // Preserve any image that already links to a project or another page.
    if (link.href !== img.src) return;
    link.classList.add('image-trigger');
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-label', `Enlarge image: ${img.alt}`);
    imageLinks.set(link.href, img);
  });

  document.body.append(viewer);
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const img = imageLinks.get(link.href);
    if (!img) return;
    event.preventDefault();
    opener = link;
    preview.src = img.src;
    preview.alt = img.alt;
    viewer.showModal();
  });
  closeButton.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    preview.removeAttribute('src');
    if (opener) opener.focus({ preventScroll: true });
  });
}
