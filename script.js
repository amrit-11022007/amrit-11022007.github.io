// ======================
// Sidebar / Hamburger menu
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar   = document.getElementById("sidebar");
  const overlay   = document.getElementById("overlay");
  const closeBtn  = sidebar.querySelector(".closebtn");
  const form      = document.getElementById("contact-form");

  function openMenu() {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    sidebar.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    sidebar.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.contains("open") ? closeMenu() : openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);
  closeBtn.addEventListener("click", closeMenu);

  sidebar.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) closeMenu();
    })
  );

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  });

  // ======================
  // EmailJS initialisation
  // ======================
  // Replace with your real public key from EmailJS dashboard
  emailjs.init({ publicKey: "XygeyG1feR7vFbZCD" });

  // ======================
  // Contact Form handler
  // ======================
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      // Send the email – update with your actual Service & Template IDs
      await emailjs.sendForm(
        "service_xv2lmn2",    // Service ID
        "template_o8ec4tn",   // Template ID
        form
      );

      alert("Message sent!");
      form.reset(); // clear all fields only after success
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Sorry, your message could not be sent. Please try again later.");
    }
  });
});
