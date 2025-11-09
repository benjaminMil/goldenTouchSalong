document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      // Toggle 'active' class on hamburger and menu
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // --- Contact Form Submission Placeholder ---
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Prevent the default form submission (page reload)
      e.preventDefault();

      // In a real application, you would send this data to a server
      // For now, just show an alert and reset the form
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }
});
