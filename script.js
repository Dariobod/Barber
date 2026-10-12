const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.querySelectorAll('[data-booking]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#booking-calendar').src = button.dataset.booking;
  document.querySelector('#reservar').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  document.querySelector('#booking-calendar').focus({ preventScroll: true });
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const header = document.querySelector('header');
let previousScroll = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScroll = Math.max(0, window.scrollY);
  const difference = currentScroll - previousScroll;
  if (currentScroll <= header.offsetHeight) {
    header.classList.remove('header-hidden');
  } else if (Math.abs(difference) >= 8) {
    const hide = difference > 0 && !header.contains(document.activeElement);
    header.classList.toggle('header-hidden', hide);
    if (hide) closeMenu();
  } else {
    return;
  }
  previousScroll = currentScroll;
}, { passive: true });
header.addEventListener('focusin', () => header.classList.remove('header-hidden'));
