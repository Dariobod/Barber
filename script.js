const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
const bookingForm = document.querySelector('.booking-form');
const formMessage = document.querySelector('.form-message');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(bookingForm).get('name').trim();
  formMessage.textContent = `Gracias, ${name}. Te contactaremos para confirmar tu cita.`;
  bookingForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
