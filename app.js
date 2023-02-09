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
let submitBtn = document.getElementById("submit");
let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");

function validateForm() {
  if ((fullName.value == "", email.value == "", (message.value = ""))) {
    alert("Name must be filled out");
  } else {
    alert("go through");
  }
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
submitBtn.addEventListener("click", function (e) {
  e?.preventDefault();
  console.log(fullName?.value);
  let fullNameError = document.getElementById("fullname-error");
  let messageError = document.getElementById("message-error");
  let emailError = document.getElementById("email-error");
  if (fullName?.value?.length < 1) {
    fullNameError.innerText = "name is required";
  } else {
    fullNameError.innerText = " ";
  }

  if (email?.value?.length < 1) {
    emailError.innerText = "email is required";
  } else {
    emailError.innerText = " ";
  }
  if (message?.value?.length < 1) {
    messageError.innerText = "message is required";
  } else {
    messageError.innerText = " ";
  }
  console.log(email?.value);
  console.log(message?.value);
});
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

// const worksContainer = document.querySelector('.boxes');
// const works = worksContainer.querySelectorAll('.box');
// const modal = document.querySelector('.modal');
// modal.style.display = 'hidden';

// worksContainer.innerHTML = '';

// // class Work {
// //     constructor(id, workImage, title, boxListItems){
// //         this.id = id;
// //         this.workImage = workImage;
// //         this.title = title;
// //         this.boxListItems = boxListItems;
// //     }
// //     showWorkCard () {
// //         worksContainer.insertAdjacentHTML('beforeend', `
// //             <div class="box" id="${this.id}" tabindex="0">
// //                     <div class="work-image" tabindex="0"></div>
// //                     <div class="box-menu" tabindex="0">
// //                       <h2 class="title" tabindex="0">${this.title}</h2>

// //                       <ul class="box-list">
// //                       ${this.boxListItems}
// //                       </ul>
// //                       <button class="box-button" id="button-${this.id}">See Project</button>
// //                     </div>
// //               </div>`);
// //     }

// // }

// // const worksArray = [];
// // works.forEach(work => {
// //     const id = work.id;
// //     const workImage = '';
// //     const title = work.querySelector('.title').innerHTML;
// //     const boxListItems = work.querySelector('.box-list').innerHTML;
// //     worksArray.push(new Work(id, workImage, title, boxListItems));
// // })

// // worksArray.forEach(work => work.showWorkCard());
// // const boxButtons = document.querySelectorAll('.box-button');
// // console.log(boxButtons);
// // boxButtons.forEach(button => button.addEventListener('click', ()=> {
// //     modal.style.display = 'flex';
// //     modal.querySelector('.close').addEventListener('click', () => {
// //     modal.style.display = 'none'});
// // } ))

// // Creation of an array of work object instances of the Work class

// const worksmenu = [
//   new Work(
//       'work-1',
//       'images/Snapshoot-Portfolio-1-desktop.png',
//       "Multi-Post Stories  Gain+Glory"
//       ['Ruby on rails', 'css', 'JavaScript'],
//   ),
//   new Work(
//       'work-2',
//       'images/Snapshoot-Portfolio-2-desktop.png',
//       'Facebook 360',
//       ['FACEBOOK', 'Full Stack Dev', 'JavaScript'],
//       `
//     Experimental content creation feature that allows users to add
//      to an existing
//     story over the course of a day without spamming their friends.`,
//       ['html', 'css', 'Ruby on rails', 'javascript'],
//   ),
//   new Work(
//       'work-3',
//       'images/Snapshoot-Portfolio-3-desktop.png',
//       'Tonic',
//       ['FACEBOOK', 'Full Stack Dev', '2016'],
//       `
//       Exploring the future of media in Facebook's first Virtual Reality app;
//        a place to discover and enjoy 360 photos and videos on Gear VR.`,
//       ['html', 'css', 'Ruby on rails', 'javascript'],
//   ),
//   new Work(
//       'work-4',
//       'images/Snapshoot-Portfolio-4-desktop.png',
//       'Uber Navigation',
//       ['Uber', 'Lead Developer', '2018'],
//       `
//       A smart assistant to make driving more safe, efficient,
//        and fun by unlocking
//        your most expensive computer: your car.`,
//       ['html', 'css', 'Ruby on rails', 'javascript'],
//   ),
//   new Work(
//     'work-5',
//     'images/Snapshoot-Portfolio-3-desktop.png',
//     'Tonic',
//     ['FACEBOOK', 'Full Stack Dev', '2016'],
//     `
//     Exploring the future of media in Facebook's first Virtual Reality app;
//      a place to discover and enjoy 360 photos and videos on Gear VR.`,
//     ['html', 'css', 'Ruby on rails', 'javascript'],
// ),
// new Work(
//     'work-6',
//     'images/Snapshoot-Portfolio-4-desktop.png',
//     'Uber Navigation',
//     ['Uber', 'Lead Developer', '2018'],
//     `
//     A smart assistant to make driving more safe, efficient,
//      and fun by unlocking
//      your most expensive computer: your car.`,
//     ['html', 'css', 'Ruby on rails', 'javascript'],
// ),
// ];

// // showing on the page each work card
// works.forEach((work) => work.showWorkCard());

// /**
//  * This class can return works objects
//  */
// class Work {
//   /**
//    * @param {string} id
//    * @param {string} imgSrc
//    * @param {string} name
//    * @param {string} smallDescription
//    * @param {string} summary
//    * @param {string} usedTools
//    *  */
//   constructor(id, imgSrc, name, smallDescription,
//       summary, usedTools) {
//     this.id = id;
//     this.imgSrc = imgSrc;
//     this.name = name;
//     this.smallDescription = smallDescription;
//     this.summary = summary;
//     this.usedTools = usedTools;
//   }

//   /**
//    * This function shows the popup on the page
//    * */
//   #displayPopup() {
//     popup.innerHTML = `
//     <div class="popup-container">
//       <div class="popup-header">
//         <div class="popup-top">
//           <h2 class="work-name title">${this.name}</h2>
//           <button class="close-popup__btn">
//             <img src="icons/reject-popup.png" alt="exit"
//             class="close-popup__icon">
//           </button>
//         </div>
//         <h4 class="small-description">
//           ${this.#CreateSmallDescriptionHTML()}
//         </h4>
//       </div>
//       <div class="popup-image__container">
//         <img src="${this.imgSrc}" alt="work image" class="popup-image">
//       </div>
//       <div class="popup-footer">
//         <p class="work-descripton-mobile">${this.summary}
//           releorem Ipsum is simply dummy text of the printing and
//            typesetting industry. Lorem Ipsum han printer took a galley of
//           type and scrambled it 1960s with the releawn printer took </p>
//         <p class="work-description-desktop">${this.summary}
//          typesetting industry. Lorem Ipsum
//          has been the industry's
//           standard dummy text ever
//           since the 1500s, when an unknown printer took a
//            galley of type and scrambled it 1960s with the
//           releorem Ipsum is simply dummy text of the printing and
//            typesetting industry. Lorem Ipsum han printer took a galley of
//           type and scrambled it 1960s with the releawn printer took
//           a galley of type and scrambled it 1960s with the releaLorem
//           Ipsum is simply dummy text of the printing and typesetting
//            industry. Lorem Ipsum has been the industry's standard dummy
//           text ever since the 1500s, when an unknown printer took a galley of
//            type and scrambled it 1960s with the relea
//         </p>
//         <div class="popup-tools-and-btn">
//           <div class="popup-work__tools">${this.#createUsedToolsHTML()}
//           </div>
//           <div class="popup-work_tools popup-work-tools_desktop">
//             <div class="tool">Github</div>
//             <div class="tool">Ruby</div>
//             <div class="tool">Bootstrap</div>
//           </div>
//           <div class="popup-btn__container">
//             <button class="popup-btn portfolio-btn">
//               See live <img src="icons/popup-see-project.png" alt="icon"
//                 class="popup-btn__icon"></button>
//             <button class="popup-btn portfolio-btn">
//               See Source <img src="icons/popup-github.png" alt="icon"
//                 class="popup-btn__icon"></button>
//           </div>
//         </div>
//       </div>
//     </div>`;
//     popup.classList.remove('popup-hidden');
//     popup.querySelector('.close-popup__btn').addEventListener('click', ()=> {
//       popup.classList.add('popup-hidden');
//     });
//     popup.addEventListener('click', (e) =>{
//       if (e.target.classList.contains('popup')) {
//         popup.classList.add('popup-hidden');
//       }
//     });
//   }
//   /**
//  *
//  * @return {string} toolsHTML
//  */
//   #createUsedToolsHTML() {
//     let toolsHTML = '';
//     this.usedTools.forEach((tool) => {
//       toolsHTML += `<li class="tool">${tool}</li>`;
//     });
//     return toolsHTML;
//   }

//   /**
//    * @return {string}
//    */
//   #CreateSmallDescriptionHTML() {
//     return `
//       ${this.smallDescription[0]}
//           <span class="small-description-highlight">
//             <img src="icons/Counter.png" class="counter"
//              alt="counter"/> ${this.smallDescription[1]}
//             <img src="icons/Counter.png" class="counter" alt="counter"/>
//              ${this.smallDescription[2]}</span>
//         `;
//   }

//   /**
//  * this function shows programaticaly the work cards on the page
//  */
//   showWorkCard() {
//     workSection.insertAdjacentHTML('beforeend', `
//     <div class="work" id="${this.id}">
//       <img src="${this.imgSrc}" class="work-image" alt="work image">
//       <div class="work-description">
//         <h3 class="work-name title">${this.name}</h3>
//         <h4 class="small-description">
//         ${this.#CreateSmallDescriptionHTML()}
//         </h4>
//         <p class="work-summary">${this.summary}
//         </p>
//         <ul class="work-used-tools">${this.#createUsedToolsHTML()}
//         </ul>
//           <button class="portfolio-btn" id="see-project-btn-${this.id}">
//             See Project</button>
//       </div>
//     </div>
//     `);
//     workSection.querySelector(`#see-project-btn-${this.id}`)
//         .addEventListener('click', this.#displayPopup.bind(this));
//   }
// }

// About Section
const worksContainer = document.querySelector(".boxes");
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
  },

  {
    id: "work-2",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
  },

  {
    id: "work-3",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: " ",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
  },

  {
    id: "work-4",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
  },

  {
    id: "work-5",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img: "./Images/ModalPopup.svg",
  },

  {
    id: "work-6",
    title: "Multi-Post Stories Gain+Glory",
    imageSource: "",
    listItem1: "Ruby on rails",
    listItem2: "Javascript",
    listItem3: "css",
    img2: "./Images/ModalPopup.svg",                                                                                   

  },
];

const showModal = function (works) {
  console.log(`close-modal-${works.id}`)

  modal.innerHTML = `
  <div class="modal-box">
  <div><span class="close" id = "close-modal-${works.id}">&times;</span></div>
  <img src="${works.img}" alt="Twiiter" />
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
