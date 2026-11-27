// Select elements for scroll reveal
const revealElements = document.querySelectorAll(
  "section h2, section p, .skill-card, .project-card, .social-icons",
);

// Add reveal class
revealElements.forEach((element, index) => {
  element.classList.add("reveal");

  if (
    element.classList.contains("skill-card") ||
    element.classList.contains("project-card")
  ) {
    element.style.transitionDelay = `${index * 0.1}s`;
  }
});

// Create Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

// Observe all elements
revealElements.forEach((element) => {
  observer.observe(element);
});
