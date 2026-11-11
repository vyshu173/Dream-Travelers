console.log("Dream Travelers main.js loaded");
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("contact-status");

    if (name.length < 3) {
      status.textContent = "Please enter a name with at least 3 characters.";
      return;
    }

    if (!email || !document.getElementById("email").validity.valid) {
      status.textContent = "Please enter a valid email address.";
      return;
    }

    if (message.length < 10) {
      status.textContent = "Please write a message with at least 10 characters.";
      return;
    }

    const popup = document.getElementById("success-popup");

    popup.classList.add("show");
    console.log("Popup opened");
    contactForm.reset();
  });
}

const closePopup = document.getElementById("close-popup");
const successPopup = document.getElementById("success-popup");

if (closePopup && successPopup) {
  closePopup.addEventListener("click", () => {
    successPopup.classList.remove("show");
  });
}