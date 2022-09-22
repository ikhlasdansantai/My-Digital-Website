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
      accordionContainer[i].children[2].style.transform = "rotate(0deg)";
    } else {
      accordionContainer[i].lastElementChild.classList.add("active");
      accordionContainer[i].children[2].style.transform = "rotate(180deg)";
    }
  });
}
window.addEventListener("scroll", () => {
  window.scrollY > 150 ? document.getElementsByClassName("onscroll-profile")[0].classList.add("show") : document.getElementsByClassName("onscroll-profile")[0].classList.remove("show");
});

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Sedang Dialihkan",
    });
  });
});
