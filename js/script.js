const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,
  spaceBetween: 20,
  grabCursor: true,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let typed = new Typed(".profession", {
  strings: ["Study", "Weeekly", "Liz From IVE", "Dubstep Music"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

let accordionContainer = document.querySelectorAll(".accordion");

for (let i = 0; i < accordionContainer.length; i++) {
  accordionContainer[i].addEventListener("click", () => {
    if (accordionContainer[i].lastElementChild.classList.contains("active")) {
      accordionContainer[i].lastElementChild.classList.remove("active");
      accordionContainer[i].children[2].style.rotate = "0deg";
    } else {
      accordionContainer[i].lastElementChild.classList.add("active");
      accordionContainer[i].children[2].style.rotate = "180deg";
    }
  });
}
window.addEventListener("scroll", () => {
  window.scrollY > 150 ? document.getElementsByClassName("onscroll-profile")[0].classList.add("show") : document.getElementsByClassName("onscroll-profile")[0].classList.remove("show");
});
