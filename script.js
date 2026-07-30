// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Typewriter effect
const roles = ["Full Stack Web Developer", "React & Node.js Enthusiast", "UI/UX Focused Engineer", "Problem Solver"];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, deleting = false;

function type() {
  const current = roles[roleIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1400);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Resume button (placeholder - replace href with your actual resume file)
document.getElementById('resumeBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Add your resume PDF to the project folder and link it here (e.g. assets/resume.pdf).');
});

// Contact form handling
// NOTE: This is a front-end placeholder. For real email notifications,
// connect this form to a backend endpoint (Node/Express) or a service
// like Formspree / EmailJS, then replace the fetch logic below.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    status.textContent = 'Please fill in all required fields.';
    status.style.color = '#ff6b6b';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Simulated send — replace with real API call to your backend
  setTimeout(() => {
    status.style.color = '#64ffda';
    status.textContent = `Thanks, ${name}! Your message has been received. I'll get back to you soon.`;
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    form.reset();
  }, 900);
});

// Reveal-on-scroll for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
});
