const form = document.getElementById("form");
const emailField = document.querySelector(".email-field");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !validateEmail(email.value) ||
    email.value === "" ||
    email.value === null
  ) {
    emailField.setAttribute("aria-invalid", "true");
  } else {
    emailField.setAttribute("aria-invalid", "false");
    const data = {};
    data[email.name] = email.value;
    localStorage.setItem("formData", JSON.stringify(data));
    location.href = "./sucess.html";
  }
});

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
