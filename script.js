// Content and navigation work without JavaScript.
const printButton = document.querySelector('[data-print]');
if (printButton && typeof window.print === 'function') {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
