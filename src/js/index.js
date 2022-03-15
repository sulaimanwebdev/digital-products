const menuIcon = document.querySelector('.menu-icon');
const menuCloseIcon = document.querySelector('.menu-close-icon');
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('.body');

const mobileMenuList = document.getElementById("main-mobile-menu");

var scroll = new SmoothScroll('a[href*="#"]');


const onOpenMenu = () => {
  body.classList.add('overflow-hidden');
  body.classList.remove('overflow-auto');
  menuMobile.classList.remove('hidden');
  menuMobile.classList.add('flex flex-col');
};

const onCloseMenu = () => {
  body.classList.add('overflow-auto');
  body.classList.remove('overflow-hidden');
  menuMobile.classList.remove('flex');
  menuMobile.classList.add('hidden');
};

// use to open menu
menuIcon.addEventListener('click', () => {
  onOpenMenu();
});

// use to close menu
menuCloseIcon.addEventListener('click', () => {
  onCloseMenu();
});

mobileMenuList.addEventListener("click", function(event) {
  onCloseMenu();
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    // loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
});

var swiper = new Swiper(".mySwiper-review", {
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true,
  // loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});