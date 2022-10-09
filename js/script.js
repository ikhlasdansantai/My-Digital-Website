const audio = new Audio();
audio.src = "./assets/music/Aespa - 에스파 Girls _ Dangdut Koplo (Full Version).mp3";
// audio.src = "./assets/Justin Bieber - Love Yourself (PURPOSE  The Movement).mp3";
audio.autoplay = true;

window.addEventListener("scroll", () => {
  audioPlay();
});

Swal.fire({
  title: "Mainkan Musik?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Ya Mainkan bro!",
  allowOutsideClick: false,
}).then((result) => {
  if (result.isConfirmed) {
    audioPlay();
  }
});

const musicLogo = document.getElementsByClassName("music-logo")[0];
let musicicon = musicLogo.firstElementChild;
musicLogo.addEventListener("click", () => {
  if (musicicon.classList.contains("fa-music")) {
    audioPause();
  } else {
    return;
    audioPlay();
  }
});

function audioPlay() {
  audio.play();
  musicicon.classList.add("fa-music");
  musicicon.classList.remove("fa-sharp", "fa-volume-xmark");
}

function audioPause() {
  audio.pause();
  musicicon.classList.add("fa-sharp", "fa-volume-xmark");
  musicicon.classList.remove("fa-music");
}

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
