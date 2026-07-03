// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// WhatsApp order button alert
const orderBtn = document.querySelector('#hero a');
orderBtn.addEventListener('click', () => {
  alert("Redirecting you to WhatsApp to place your order!");
});

// Dynamic year in footer
document.querySelector('footer p').innerHTML =
  `&copy; ${new Date().getFullYear()} Pi Soko Purified Water. All rights reserved.`;

// Highlight active section in navbar while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sec.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

