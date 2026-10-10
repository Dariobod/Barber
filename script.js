const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
function today() { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`; }
document.querySelector('#date').min = today();
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#service').value = button.dataset.service;
  document.querySelector('#reservar').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  document.querySelector('#service').focus({ preventScroll: true });
}));
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault(); const data = new FormData(event.currentTarget); const name = String(data.get('name')).trim(); const message = document.querySelector('#message');
  if (!name) { message.textContent = 'Ingresá tu nombre para probar la reserva.'; return; }
  if (String(data.get('date')) < today()) { message.textContent = 'Elegí una fecha de hoy en adelante.'; return; }
  const date = new Date(`${data.get('date')}T12:00:00`).toLocaleDateString('es-AR');
  message.textContent = `${name}, así se vería tu solicitud: ${data.get('service')}, ${date} a las ${data.get('time')}. Es una demostración: no se enviaron datos ni se reservó un turno.`;
});
document.querySelector('#year').textContent = new Date().getFullYear();
