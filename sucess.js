const btn = document.querySelector(".button");
const mail = document.getElementById("mail");

mail.textContent = JSON.parse(localStorage.getItem("formData"))["email"];
console.log(mail.textContent);
btn.addEventListener("click", () => {
  location.href = "./index.html";
});
