document.addEventListener("DOMContentLoaded", () => {

  // --- Modal logic ---
  const cards = document.querySelectorAll('.project-card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // --- LEFT SIDE PROJECT NAV SCROLL LOGIC ---
  const subnav = document.getElementById("projectsNav");
  const projectsSection = document.getElementById("projects");

  window.addEventListener("scroll", function () {
  const triggerPoint = projectsSection.offsetTop - window.innerHeight / 3;

  if (window.scrollY >= triggerPoint) {
    subnav.style.left = "0"; 
  } else {
    subnav.style.left = "-450px";
  }
});


});

const scrollBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {         // show after scrolling a bit
        scrollBtn.style.display = 'flex';
      } else {
        scrollBtn.style.display = 'none';
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });