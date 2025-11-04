import Swiper from "swiper/bundle";
import { Pagination, Keyboard, Mousewheel, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const swiperMainEl = document.querySelector(".swiper-main");

if (swiperMainEl) {
  let swiperMain;

  function initSwiperMain() {
    if (window.innerWidth >= 1440 && !swiperMain) {
      swiperMain = new Swiper(".swiper-main", {
        direction: "vertical",
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        speed: 1000,
        keyboard: { enabled: true, onlyInViewport: true },
        mousewheel: true,
        modules: [Pagination, Keyboard, Mousewheel, EffectFade],
        slidesPerView: 1,
        resizeObserver: true,
        observer: true,
        observeParents: true,
        loop: false,
        grabCursor: true,

        pagination: {
          el: ".swiper-pagination-main",
          clickable: true,
          renderBullet: function (index, className) {
            return `
              <div class="${className}">
               <svg class="pagination-icon default">
                  <use href="img/icons.svg#hero--nav-icon"></use>
                </svg>
                <svg class="pagination-icon active">
                  <use href="img/icons.svg#hero--nav-active-icon"></use>
                </svg>
              </div>`;
          },
        },
      });
    } else if (window.innerWidth < 1440 && swiperMain) {
      swiperMain.destroy(true, true);
      swiperMain = null;
    }
  }

  document.addEventListener("DOMContentLoaded", initSwiperMain);
  window.addEventListener("resize", initSwiperMain);
}
