const loginForm = document.getElementById("login-form");

if (sessionStorage.getItem("dreamTravelersAuthenticated") === "true") {
  window.location.replace("travel index.html");
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-msg");

    if (!email || !password) {
      errorMessage.textContent = "Enter your email and password.";
      return;
    }

    if (!document.getElementById("email").validity.valid) {
      errorMessage.textContent = "Enter a valid email address.";
      return;
    }

    // Any valid email and non-empty password can enter this front-end demo.
    sessionStorage.setItem("dreamTravelersAuthenticated", "true");
    window.location.href = "travel index.html";
  });
}
