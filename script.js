document.addEventListener("DOMContentLoaded", () => {
  // Select all elements to observe for scroll animations
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  // Callback for Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Unobserve after animation to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  };

  // Observer configuration
  const observerOptions = {
    root: null, // Viewport
    rootMargin: "0px",
    threshold: 0.15, // Trigger at 15% visibility
  };

  // Initialize observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe elements
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu on link click
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Contact form submission handler (placeholder)
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }
});
