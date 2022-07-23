if (window.innerWidth <= 600) {
  const elements = document.querySelectorAll('[data-aos');
  Array.from(elements).forEach(element => {
    element.setAttribute('data-aos', "fade-in")
  })
}
AOS.init({
  // Global settings:
  disable: "false", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// const logoText = document.querySelector(".logo__title");
// if (logoText) {
//   const split = splitText(logoText);
// }

const headerNavItem = document.querySelectorAll(".header__nav-item");

Array.from(headerNavItem).forEach((element, index) => {
  element.setAttribute("data-aos-delay", index + "00");
});



const html = document.getElementsByTagName("html")[0]
const header = document.querySelector(".header")
const buttonTop = document.querySelector(".button-top")

let scrollTop = html.scrollTop;

window.addEventListener('scroll', () => {

  if(scrollTop < html.scrollTop){
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  if(scrollTop > 200) {
    header.classList.add("active")
    buttonTop.classList.add("active")
  } else {
    header.classList.remove("active")
    buttonTop.classList.remove("active")
  }
  scrollTop = html.scrollTop;
});



// Functions 

function splitText(el) {
  el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
    return `<div class="word">` +
      m.replace(/(-|#|@)?\S(-|#|@)?/g, '<div  data-aos="fade-in" class="letter">$&</div>') +
      `</div>`;
  });

  const letters = el.querySelectorAll(".letter");

  Array.from(letters).forEach((element, index) => {
    element.setAttribute("data-aos-delay", index + "00")
  });

  return el;
}