const navbar = document.querySelector(".navbar");

const aboutContainer = document.querySelector(".about-container2");
const portContainer = document.querySelector(".end-port");
// const contactContainer = document.querySelector(".contact-container");
const aboutLink = document.querySelector(".about");

const portLink = document.querySelector(".port");
const message = document.querySelector(".message");

/** Mobile elements */
const mobileHeader = document.querySelector(".logo-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-bar");
const header = document.querySelector("header");
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
const currentContainer = 0;
document.addEventListener(
  "scroll",
  function () {
    const messageText = isInViewport(aboutContainer)
      ? aboutLink.classList.add("show")
      : aboutLink.classList.remove("show");

    message.textContent = messageText;
  },
  {
    passive: true,
  }
);

document.addEventListener(
  "scroll",
  function () {
    const messageText = isInViewport(portContainer)
      ? portLink.classList.add("show")
      : portLink.classList.remove("show");

    message.textContent = messageText;
  },
  {
    passive: true,
  }
);

console.log(isInViewport(aboutContainer));

/** Mobile functionality */

mobileMenu.addEventListener("click", () => {
  mobileHeader.classList.add("hide");
  mobileLinks[0].classList.add("show");
  //mobileLinks.classList.add("show");
});

mobileLinks.forEach((li) => {
  li.addEventListener("click", (e) => {
    // e.preventDefault();
    mobileHeader.classList.remove("hide");
    li.classList.remove("show");

    // console.log("clicked,ddsk");
  });
});

var prevScrollPos = document.documentElement.scrollTop;

window.addEventListener("scroll", function () {
  var currentScrollPos = document.documentElement.scrollTop;

  if (prevScrollPos > currentScrollPos) {
    // when scrolling up
    header.classList.add("toggle");
  } else {
    // when scrolling down
    console.log("---");
    header.classList.remove("toggle");
  }

  prevScrollPos = currentScrollPos;
});
