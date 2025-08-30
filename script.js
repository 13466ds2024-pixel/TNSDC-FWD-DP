// Fade-in effect on scroll
const sections = document.querySelectorAll('section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;

    if (secTop < triggerBottom) {
      sec.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
