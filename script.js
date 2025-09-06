// Small JS: nav toggle, contact form validation, year update
document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // basic contact form handling - opens mail client
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please complete all fields.';
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      status.textContent = 'Please enter a valid email.';
      return;
    }

    const subject = encodeURIComponent(`Message from ${name} via Schafari's website`);
    const body = encodeURIComponent(message + '\n\n—' + name + '\n' + email);
    const mailto = `mailto:schafari2020@gmail.com?subject=${subject}&body=${body}`;

    status.textContent = 'Opening your email client...';
    window.location.href = mailto;
  });
});
