// Legacy Line Fr8 & Logistix — site interactions

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form -> mailto (swap for a form backend like Formspree for production)
const QUOTE_RECIPIENT = 'wes@championdigitalmedia.com';

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const val = (name) => f.elements[name].value.trim();

  const subject = `Freight Quote Request — ${val('origin')} to ${val('destination')}`;
  const body = [
    'New freight quote request from the Legacy Line website:',
    '',
    `Name:         ${val('name')}`,
    `Company:      ${val('company') || '—'}`,
    `Email:        ${val('email')}`,
    `Phone:        ${val('phone') || '—'}`,
    '',
    `Origin:       ${val('origin')}`,
    `Destination:  ${val('destination')}`,
    `Freight type: ${val('freightType')}`,
    `Ship date:    ${val('shipDate') || '—'}`,
    '',
    'Load details:',
    val('details') || '—',
  ].join('\n');

  window.location.href =
    `mailto:${QUOTE_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  document.getElementById('formNote').textContent =
    'Your email app should open with the request prefilled — just hit send.';
});
