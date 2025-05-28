document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector("button");

 
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    window.location.href = "main.html"; 
    return;
  }

  loginButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    if (name === "" || password === "") {
      alert("Zadej jméno i heslo.");
      return;
    }

    const user = {
      name: name,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "main.html"; 
  });
});
