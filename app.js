// Handburger Menu
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// localStorage
let submitBtn = document.getElementById("submit");
let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fullName = fullName.value;
  localStorage.setItem("Full Name", fullName);
  email = email.value;
  localStorage.setItem("Email", email);
  message = message.value;
  localStorage.setItem("message", message);
//   validateInputs();
  document.getElementById("form").reset();
});

