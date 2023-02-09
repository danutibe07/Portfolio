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

// // localStorage
// let submitBtn = document.getElementById("submit");
// let fullName = document.getElementById("fullname");
// let email = document.getElementById("email");
// let message = document.getElementById("message");

// function validateForm() {
//   if (fullName.value == "" , email.value == "" , message.value = "") {
//     alert("Name must be filled out");
//   }
//   else {
//     alert("go through")
//   }
// }
// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   fullName = fullName.value;
//   localStorage.setItem("Full Name", fullName);
//   email = email.value;
//   localStorage.setItem("Email", email);
//   message = message.value;
//   localStorage.setItem("message", message);
//    validateForm();
//   document.getElementById("form").reset();
// });

// let modal1 = document.querySelector(".modal1")
// let modal2 = document.querySelector(".modal2")

// let modalBtn = document.querySelector("#project")
// let span = document.getElementsByClassName("close")[0];

// modalBtn.addEventListener("click", () => {
//   modal.style.display = "block" ;
// });

// span.onclick = function() {
//   modal.style.display = "none" ;
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none" ;
//   }
// }

const worksContainer = document.querySelector('.boxes');
const works = worksContainer.querySelectorAll('.box');
const modal = document.querySelector('.modal');
modal.style.display = 'hidden';
const modalmobile = document.querySelector('.modalmobile');
modalmobile.style.display = 'hidden';

worksContainer.innerHTML = '';

class Work {
    constructor(id, workImage, title, boxListItems){
        this.id = id;
        this.workImage = workImage;
        this.title = title;
        this.boxListItems = boxListItems;
    }
    showWorkCard () {
        worksContainer.insertAdjacentHTML('beforeend', `
            <div class="box" id="${this.id}" tabindex="0">
                    <div class="work-image" tabindex="0"></div>
                    <div class="box-menu" tabindex="0">
                      <h2 class="title" tabindex="0">${this.title}</h2>

                      <ul class="box-list">
                      ${this.boxListItems}
                      </ul>
                      <button class="box-button" id="button-${this.id}">See Project</button>
                    </div>
              </div>`);
    }
}


const worksArray = [];
works.forEach(work => {
    const id = work.id;
    const workImage = '';
    const title = work.querySelector('.title').innerHTML;
    const boxListItems = work.querySelector('.box-list').innerHTML;
    worksArray.push(new Work(id, workImage, title, boxListItems));
})

worksArray.forEach(work => work.showWorkCard());
const boxButtons = document.querySelectorAll('.box-button');
console.log(boxButtons);
boxButtons.forEach(button => button.addEventListener('click', ()=> {
  modalmobile.style.display = 'flex';
  modal.style.display = 'flex';
  modalmobile.querySelector('.close').addEventListener('click', () => {
    modalmobile.style.display = 'none'});
    modal.querySelector('.close').addEventListener('click', () => {
      modal.style.display = 'none'});
} ))