import Swiper from 'swiper';
import "swiper/css";
/*import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Review } from '/src/types/reviews.ts';*/


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  loop: false,
  spaceBetween: 32,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },
}
);
console.log("ok");
