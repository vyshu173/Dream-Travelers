(() => {
  const loginPage = "travel login.html";
  const isLoginPage = decodeURIComponent(window.location.pathname).endsWith(loginPage);
  const isAuthenticated = sessionStorage.getItem("dreamTravelersAuthenticated") === "true";

  if (!isLoginPage && !isAuthenticated) {
    window.location.replace(loginPage);
    return;
  }

  if (!isLoginPage && isAuthenticated) {
    const loginLink = document.querySelector(".nav-links .login");

    if (loginLink) {
      loginLink.textContent = "Log out";
      loginLink.href = "#logout";
      loginLink.addEventListener("click", (event) => {
        event.preventDefault();
        sessionStorage.removeItem("dreamTravelersAuthenticated");
        window.location.replace(loginPage);
      });
    }
  }
})();
