const handburger = document.querySelector(".handburger")
const navMenu = document.querySelector(".nav-menu")

handburger.addEventListener("click", () =>{
    handburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
