// Handburger Menu
const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
let menuOpen = false;

const button = document.querySelector(".box-button");

button.addEventListener("click", function () {
  const anchor = document.createElement("a");
  anchor.href =
    "https://docs.google.com/document/d/18SrVvsSah8YJjMwwb7orPIgWlIAWCQ9AsgnkuNTQzUQ/edit";
  anchor.download = "resume.pdf";
  anchor.click();
});

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

// About Section
const workSection = document.querySelector(".boxes");
const modal = document.querySelector(".modal");

const works = [
  {
    id: "work-1",
    title: "CockTail App",
    imageSource: "./Images/cocktail.jpg",
    listItem1: "css",
    listItem2: "Javascript",
    listItem3: "linters",
    listItem4: "React",
    img: "./Images/cocktailM.avif",
    mobileImg: "./Images/cocktail.jpg",
    live: "https://mavik-cocktail-db.netlify.app/",
    source: "https://github.com/danutibe07/React-Cocktail-App",
    full_details:
      `Introducing an engaging and dynamic online platform that takes your taste buds
       on a thrilling journey through the world of beverages. Our website harnesses 
       the power of APIs to bring you an ever-expanding selection of drinks, from 
       cocktails to wines, each waiting to be discovered. Whether you're a seasoned
        sommelier or a curious mixologist, our Interactive Drink Explorer is your go-to
         destination. With just a few clicks, you can explore an extensive library 
        of libations, filter by ingredients, flavor profiles, and more. simply quench your 
        curiosity with the latest libation trends.
         Cheers to endless possibilities, and let your taste adventure begin!`,
  },
  {
    id: "work-2",
    title: "ToDo List",
    imageSource: "./Images/todo.avif",
    listItem1: "css",
    listItem2: "Javascript",
    listItem3: "linters",
    listItem4: "es6",
    listItem4: "webpack",
    img: "./Images/todoM.avif",
    mobileImg: "./Images/MobileModalPopup.svg",
    live: "https://danutibe07.github.io/To-Do-List/dist/",
    source: "https://github.com/danutibe07/To-Do-List",
    full_details: `Welcome to this ToDo List application designed to supercharge your productivity 
      and help you stay organized effortlessly. With our user-friendly interface, 
  managing your tasks has never been easier. Create, prioritize, and track your to-do 
      items with just a few clicks. You can add notes and even categorize your tasks to 
      streamline your workflow. The app is user-friendly, Experience the joy of checking off 
      completed tasks and achieving your goals with ease. Say goodbye to cluttered lists and 
      hello to a more organized and productive you!`,
  },
  {
    id: "work-3",
    title: "Maths Magician",
    imageSource: "./Images/maths.jpg",
    listItem1: "Javascript",
    listItem2: "css",
    listItem3: "webpack",
    listItem4: "linters",
    img: "./Images/mathsdis.png",
    mobileImg: "./Images/MobileModalPopup.svg",
    live: "https://math-magicians-pued.onrender.com/",
    source: "https://github.com/danutibe07/math-magicians",
    full_details: `Experience math's magic and inspiration together. Our app combines a versatile calculator with random motivational quotes from an API. Solve equations and find inspiration in one place, making math a magical journey. `,
  },
  {
    id: "work-4",
    title: "Catalog of things",
    imageSource: "./Images/catalog.jpg",
    listItem1: "Ruby on rails",
    listItem2: "Ruby",
    listItem3: "Linters",
    listItem4: "webpack",
    img: "./Images/CatalogM.jpeg",
    mobileImg: "./Images/catalog.jpg",
    live: "https://github.com/danutibe07/catalog-of-things",
    source: "https://github.com/danutibe07/catalog-of-things",
    full_details: `Introducing the 'Catalogue of Things' app, your gateway to a world of exploration and organization. This versatile app brings together various item categories, including libraries, music tracks, and more, into one convenient catalog.`
  },

  {
    id: "work-5",
    title: "Country Api",
    imageSource: "./Images/country.avif",
    listItem1: "Html",
    listItem2: "Javascript",
    listItem3: "css",
    listItem4: "webpack",
    img: "./Images/countryM.webp",
    mobileImg: "./Images/country.avif",
    live: "https://danutibe07.github.io/Rest-country-Api/",
    source: "https://github.com/danutibe07/Rest-country-Api",
    full_details: `Discover the world with our comprehensive Country API app. It's your passport to a wealth of information about countries worldwide. Instantly access data on a country's currency, capital, exchange rates, and much more. Whether you're a globetrotter planning your next adventure or a financial enthusiast keeping an eye on international markets, our app has you covered. With user-friendly features and up-to-date information, you can explore the diverse aspects of any country with ease. From currency conversion to geographical insights, our app makes accessing country-specific data a breeze, empowering you to make informed decisions and satisfy your curiosity about the world.`
    
  },
  {
    id: "work-6",
    title: "GalleryVista",
    imageSource: "https://i.pinimg.com/1200x/11/c1/20/11c1201e91eef47e2e8d19aa9dae06b1.jpg",
    listItem1: "Next",
    listItem2: "Javascript",
    listItem3: "Tailwind",
    listItem4: "Clerk",
    img: "https://store-images.s-microsoft.com/image/apps.56442.13510798887465976.3cfa1e4f-d9ba-482e-b65b-f00e1cda8b6d.fe14729f-9789-4c07-9557-2484d67f2397",
    mobileImg: "https://i.pinimg.com/1200x/11/c1/20/11c1201e91eef47e2e8d19aa9dae06b1.jpg",
    live: "https://task3-hng-kkty.vercel.app/",
    source: "https://github.com/danutibe07/task3-hng",
    full_details: "GalleryVista is a feature-rich gallery application that combines the convenience of organizing and showcasing your images with the security of user authentication"
  },
];

//Modal
const showModal = function (works) {
  console.log(`close-modal-${works.id}`);
  modal.innerHTML = `
  <div class="modal-box">
  <span class="close" id = "close-modal-${works.id}">&#10006;</span>
  <img src="${works.mobileImg}" alt="Mobile-Works-img-${works.id}" class= "mobileimg" />
  <img src="${works.img}" alt="Works-img-${works.id}" class="desktopimg" />
  <div class="modal-desc">
    <h3>${works.title}</h3>
    <ul class="desktop-popup-button">
    <a href="${works.live}"><button class="modal-button" >See Live   <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></button></a>
    <a href="${works.source}"><button class="modal-button">See Source <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></button></a>
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
  <p>${works.full_details}</p>
  <ul class="mobile-popup-button">
  <a href="${works.live}"><button class="modal-button" >See Live   <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></button></a>
  <a href="${works.source}"><button class="modal-button">See Source <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></button></a>
  </ul>
</div>  `;
  modal.style.display = "flex";
  document
    .querySelector(`#close-modal-${works.id}`)
    .addEventListener("click", () => {
      modal.style.display = "none";
    });
};
//Show cards in work section
const showCard = function (arr) {
  arr.forEach((elem) => {
    workSection.insertAdjacentHTML(
      "beforeend",
      `
    <div class="box" id="box-${elem.id}" tabindex="0">
    <img tabindex="0" class="work-image" src="${elem.imageSource}" alt="">
    <div class="box-menu">
      <h2 class="title" tabindex="0">${elem.title}</h2>
      <ul class="box-list">
        <li tabindex="0" class="box-list-item">${elem.listItem1}</li>
        <li tabindex="0" class="box-list-item">${elem.listItem2}</li>
        <li tabindex="0" class="box-list-item">${elem.listItem3}</li>
        <li tabindex="0" class="box-list-item">${elem.listItem4}</li>
      </ul>
      <button class="box-button" id = "${elem.id}-btn" >See Project</button>
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

//Storing data in Local Storage
const addFormData = () => {
  let email = document.getElementById("email");
  let fullName = document.getElementById("fullname");
  let message = document.getElementById("message");
  const form = {
    FullName: fullName.value,
    Email: email.value,
    Message: message.value,
  };
  localStorage.setItem("contact-data", JSON.stringify(form));
  console.log(form);
  document.querySelector("form").reset();
};

//form validation for forms
let contactForm = document.querySelector(".contactform");
let errorMessage = document.getElementById("error-message");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let fullName = document.getElementById("fullname");
  let message = document.getElementById("message");
  const emailValue = email.value;
  const fullNameValue = fullName.value;
  const messageValue = message.value;
  if (emailValue === emailValue.toLowerCase()) {
    errorMessage.textContent = "";
    contactForm.submit();
    addFormData(fullNameValue, emailValue, messageValue);
  } else {
    errorMessage.textContent =
      "email adress must not contain uppercase letter !!";
  }
});
