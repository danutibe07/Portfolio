// Handburger Menu
const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
let menuOpen = false;
menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("open");
    menuOpen = true;
  } else {
    menuButton.classList.remove("open");
    menuOpen = false;
  }
});

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  if (!menuOpen) {
    menuButton.classList.add("open");
    menuOpen = true;
  } else {
    menuButton.classList.remove("open");
    menuOpen = false;
  }
});

//  localStorage
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

// About Section
const workSection = document.querySelector(".boxes");
const modal = document.querySelector(".modal");

const works = [
  {
    id: "work-1",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
    mobileImg : "./Images/MobileModalPopup.svg",     
  },

  {
    id: "work-2",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
    mobileImg : "./Images/MobileModalPopup.svg",     
  },

  {
    id: "work-3",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: " ",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
    mobileImg : "./Images/MobileModalPopup.svg",     
  },

  {
    id: "work-4",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
    mobileImg : "./Images/MobileModalPopup.svg",     
  },

  {
    id: "work-5",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
    mobileImg : "./Images/MobileModalPopup.svg",     
  },

  {
    id: "work-6",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",     
    mobileImg : "./Images/MobileModalPopup.svg",     
  },
];

const showModal = function (works) {
  console.log(`close-modal-${works.id}`)
  modal.innerHTML = `
  <div class="modal-box">
  <span class="close" id = "close-modal-${works.id}">&#10006;</span>
  <img src="${works.mobileImg}" alt="Mobile-Works-img-${works.id}" class= "mobileimg" />
  <img src="${works.img}" alt="Works-img-${works.id}" class="desktopimg" />
  <div class="modal-desc">
    <h3>Keeping track of hundreds of components</h3>
    <ul class="desktop-popup-button">
      <button class="modal-button">See Live   <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></button>
      <button class="modal-button">See Source <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></button>
    </ul>
  </div>
  <ul class="desktop-modal-list">
    <li tabindex="0" class="modal-list-item">Codekit</li>
    <li tabindex="0" class="modal-list-item">Github</li>
    <li tabindex="0" class="modal-list-item">Javascript</li>
    <li tabindex="0" class="modal-list-item">Bootstrap</li>
    <li tabindex="0" class="modal-list-item">Terminal</li>
    <li tabindex="0" class="modal-list-item">Codepen</li>
  </ul>
  <ul class="mobile-modal-list">
    <li tabindex="0" class="modal-list-item">Ruby on rails</li>
    <li tabindex="0" class="modal-list-item">css</li>
    <li tabindex="0" class="modal-list-item">Javascript</li>
  </ul>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release</p>
  <ul class="mobile-popup-button">
    <button class="modal-button">See Live   <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></button>
    <button class="modal-button">See Source <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></button>
  </ul>
</div>  `;
  modal.style.display = "flex";
  document.querySelector(`#close-modal-${works.id}`).addEventListener('click', ()=>{
    modal.style.display = 'none'
  });
};
const showCard = function (arr) {
  arr.forEach((elem) => {
    workSection.insertAdjacentHTML(
      "beforeend",
      `
    <div class="box" id="box-${elem.id}" tabindex="0">
    <div tabindex="0" class="work-image">${elem.imageSource}</div>
    <div class="box-menu">
      <h2 class="title" tabindex="0">${elem.title}</h2>
      <ul class="box-list">
        <li tabindex="0" class="box-list-item">${elem.listItem1}</li>
        <li tabindex="0" class="box-list-item">${elem.listItem2}</li>
        <li tabindex="0" class="box-list-item">${elem.listItem3}</li>
      </ul>
      <button class="box-button" id = "${elem.id}-btn">See Project</button>
      </div>
    </div>
    `
    );
    document.querySelector(`#${elem.id}-btn`).addEventListener("click", () => {
      showModal(elem);
    });
  });
};

showCard(works);

//form validation
let email = document.getElementById("email");
let contactForm = document.querySelector(".contactform")
let errorMessage = document.getElementById("error-message")
console.log(contactForm)
contactForm.addEventListener("submit",  (e) => {
  e.preventDefault() 
  const emailValue = email.value 
  if (emailValue === emailValue.toLowerCase()){
   errorMessage.textContent = "" ;
    contactForm.submit() ;
  }
  else{
    errorMessage.textContent = "email adress must not contain uppercase letter !!" ;
  }
})