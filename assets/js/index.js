/*======= CHANGE HEADER BACKGROUND =======*/

function headerScroll() {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("header__sticky")
    : header.classList.remove("header__sticky");
}

window.addEventListener("scroll", headerScroll);

// WORK LINKS

const workItem = document.querySelectorAll(".work__item");

const workActive = function () {
  workItem.forEach((e) => {
    e.classList.remove("work__active");

    this.classList.add("work__active");
  });
};

workItem.forEach((e) => e.addEventListener("click", workActive));

/*======= SCROLL SECTION ACTIVE LINK =======*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document

        .querySelector(".nav__menu a[href*=" + sectionId + "]")

        .classList.add("nav__active-link");
    } else {
      document

        .querySelector(".nav__menu a[href*=" + sectionId + "]")

        .classList.remove("nav__active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

document.querySelector(".nav__active-link").style.transition = "all 0.5s";

/*======= DARK / LIGHT THEME =======*/

const themeButton = document.getElementById("theme-button");

const lightTheme = "light-theme";

const iconTheme = "bxs-sun";

// Previously selected topic (if user selected)

/* localStorage returns the current value associated with the given key,

or null if the given key does not exist. */

const selectedTheme = localStorage.getItem("selected-theme");

const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bxs-sun";

// We validate if the user previously chose a topic

if (selectedTheme) {
  /* If the validation is fulfilled, we ask what the issue was to

     know if we activated or deactivated the dark theme */

  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );

  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme

  document.body.classList.toggle(lightTheme);

  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose

  localStorage.setItem("selected-theme", getCurrentTheme());

  localStorage.setItem("selected-icon", getCurrentIcon());
});

// COPYRIGHT YEAR

const year = new Date().getFullYear();

document.getElementById("year").textContent = year;

/*========== PRELOADER ==========*/

function preloader() {
  document.querySelector(".preloader").classList.add("fade-out");
}

/*==========  SHOW / HIDE FIXED NAV MENU ==========*/

window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);
const fixedNav = document.querySelector(".nav__menu");
function calcScrollValue() {
  let pos = document.documentElement.scrollTop;
  pos > 80
    ? fixedNav.classList.add("active")
    : fixedNav.classList.remove("active");
}

function fadeFixedNav() {
  fixedNav.classList.remove("active");
}

// FADE OUT FIXED NAVBAR AND PRELOADER
function fadeOut() {
  setInterval(preloader, 2000);
  setInterval(fadeFixedNav, 4000);
}

window.onload = fadeOut;

/*======= SCROLL REVEAL ANIMATION =======*/

const scrReveal = ScrollReveal({
  origin: "bottom",

  distance: "60px",

  duration: 2000,

  delay: 300,

  // reset: true,
});

scrReveal.reveal(`.about__img, .contact__content-img`, {
  origin: "left",
});

scrReveal.reveal(`.about__data, .contact__form`, {
  origin: "right",
});

scrReveal.reveal(`.skills`);

scrReveal.reveal(`.work`);

/*======= MIXITUP PASSING A CONFIGURATION OBJECT =======*/

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },

  animation: {
    effects: "fade translateX(100%)",

    reverseOut: true,

    nudge: false, // Disable nudging to create a carousel-like effect
  },
});
