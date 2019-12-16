// * USED TO FIND SVG PATH LENGTH
// const logo = document.querySelectorAll(".name-logo path");
// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

// * SCROLL INTO VIEW - ANCHOR TAGS
function redirect(name) {
  var element = document.querySelector(name);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center"
  });
}

// * NAVIGATION BAR - STICKY
window.onscroll = function() {
  stickyAdd();
};

const navbar = document.querySelector(".nav__container");
const content = document.querySelector(".about-page");
let sticky = navbar.offsetTop;
function stickyAdd() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    content.style = "margin-top: 5rem;";
  } else {
    navbar.classList.remove("sticky");
    content.style = "margin-top: 0px;";
  }
}

//* NAVIGATION BAR - ACTIVE
let mainNavLinks = document.querySelectorAll(".page-link");
let mainSections = document.querySelectorAll("main section");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY - 50;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 55 &&
      section.offsetTop + section.offsetHeight > fromTop + 55
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

//* NAVIGATION BAR - HAMBURGER MENU
const levOne = document.querySelector(".lev-one");
const LevTwo = document.querySelector(".lev-two");
const levThree = document.querySelector(".lev-three");

const overlay = document.querySelector(".overlay");
const pageLinks = document.querySelectorAll(".page-link");

function toggleMenu() {
  levOne.classList.toggle("lev-one--close");
  LevTwo.classList.toggle("lev-two--close");
  levThree.classList.toggle("lev-three--close");
  overlay.classList.toggle("visible");
  if (overlay.classList.contains("visible")) {
    pageLinks.forEach(link => {
      link.addEventListener("click", () => {
        levOne.classList.remove("lev-one--close");
        LevTwo.classList.remove("lev-two--close");
        levThree.classList.remove("lev-three--close");
        overlay.classList.remove("visible");
      });
    });
  }
}

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  if (window.innerWidth > 900) {
    overlay.classList.remove("visible");
  }
});

//* SUBMIT BUTTON
const button = document.querySelector(".contact-btn");
const submit = document.querySelector(".submit");
const form = document.querySelector(".contact-page__form");
const inputs = document.querySelectorAll(".input-field");
const inputList = Array.from(inputs);

function isFilled() {
  return form.checkValidity();
}

function toggleClass() {
  if (isFilled()) {
    this.classList.toggle("active");
  }
}

function addClass() {
  this.classList.add("finished");
  button.disabled = true;
  inputList.forEach(field => {
    field.value = "";
  });
}

button.addEventListener("click", toggleClass);
button.addEventListener("transitionend", toggleClass);
button.addEventListener("transitionend", addClass);

//* ANIMATION WITH AOS LIBRARY

const mainHeadings = document.querySelectorAll(".heading-section-lev");
mainHeadings.forEach(heading => {
  heading.setAttribute("data-aos", "fade-right");
  heading.setAttribute("data-aos-duration", "900");
});

// --------------------------------------------------------------------------

const aboutIcons = document.querySelectorAll(".icon__img");

const iconDelayOne = "250";
const iconDelayTwo = "500";
const iconDelayThree = "750";

aboutIcons.forEach(icon => {
  icon.setAttribute("data-aos", "flip-right");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    aboutIcons[1].setAttribute("data-aos-delay", iconDelayOne);
    aboutIcons[2].setAttribute("data-aos-delay", iconDelayTwo);
    aboutIcons[3].setAttribute("data-aos-delay", iconDelayThree);
  }
});

// --------------------------------------------------------------------------

const aboutInfoBlocks = document.querySelectorAll(".icon__info");
aboutInfoBlocks.forEach(block => {
  block.setAttribute("data-aos", "fade-up");
});

aboutInfoBlocks[1].setAttribute("data-aos-delay", iconDelayOne);
aboutInfoBlocks[2].setAttribute("data-aos-delay", iconDelayTwo);
aboutInfoBlocks[3].setAttribute("data-aos-delay", iconDelayThree);

// --------------------------------------------------------------------------

const biographyArticle = document.querySelector(".biography-page__article");
biographyArticle.setAttribute("data-aos", "fade-left");
biographyArticle.setAttribute("data-aos-offset", "200");

// --------------------------------------------------------------------------

const biographyImage = document.querySelector(".biography-page__img");
biographyImage.setAttribute("data-aos", "fade-right");
biographyImage.setAttribute("data-aos-offset", "300");

// --------------------------------------------------------------------------

const skillsIcons = document.querySelectorAll(".skills__icon");
skillsIcons.forEach(icon => {
  icon.setAttribute("data-aos", "zoom-in-up");
  icon.setAttribute("data-aos-duration", "600");
});

// --------------------------------------------------------------------------

const projectTile = document.querySelector(".projects__container");
projectTile.setAttribute("data-aos", "fade-left");
projectTile.setAttribute("data-aos-duration", "800");
// --------------------------------------------------------------------------

const contactSubtitle = document.querySelector(".contact-page__subtitle");
contactSubtitle.setAttribute("data-aos", "fade-left");
contactSubtitle.setAttribute("data-aos-delay", "200");

// --------------------------------------------------------------------------

const contactForm = document.querySelector(".contact-page__form");
contactForm.setAttribute("data-aos", "zoom-in");
contactForm.setAttribute("data-aos-offset", "200");
contactForm.setAttribute("data-aos-duration", "800");
