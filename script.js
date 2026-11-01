const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.contains('open');
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (navMenu) {
      navMenu.classList.remove('open');
    }

    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields before sending your message.';
      formMessage.className = 'form-message error';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.className = 'form-message error';
      return;
    }

    formMessage.textContent = 'Thank you! Your message is ready to be sent through a backend connection.';
    formMessage.className = 'form-message success';
    form.reset();
  });
}
