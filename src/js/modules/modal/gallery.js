import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperGalleryVip = document.querySelector(".swiper-gallery-modal");

let swiperVip;

if (swiperGalleryVip) {
  function initSwiperVip() {
    swiperVip = new Swiper(".swiper-gallery-modal", {
      direction: "horizontal",
      keyboard: { enabled: true, onlyInViewport: true },
      modules: [Pagination, Keyboard],
      speed: 800,
      slidesPerView: 1,
      resizeObserver: true,
      observer: true,
      observeParents: true,
      loop: false,
      grabCursor: true,
      navigation: {
        nextEl: ".gallery__btn-next",
        prevEl: ".gallery__btn-prev",
      },
      on: {
        init: function () {
          const totalEl = document.querySelector(".total-pagination");
          const currentEl = document.querySelector(".current-pagination");

          totalEl.textContent = this.slides.length.toString().padStart(2, "0");
          currentEl.textContent = "01";
        },
        slideChange: function () {
          const currentEl = document.querySelector(".current-pagination");
          currentEl.textContent = (this.activeIndex + 1)
            .toString()
            .padStart(2, "0");
        },
      },
    });
  }
  document.addEventListener("DOMContentLoaded", initSwiperVip);

  window.addEventListener("resize", () => {
    initSwiperVip();
  });
}

const galleryModal = document.querySelector(".gallery-modal");
const closeBtnGall = document.querySelector(".gallery-modal-close");

function closeGalleryModal() {
  galleryModal.classList.remove("active");
  setTimeout(() => {
    galleryModal.style.display = "none";
  }, 400);
}

if (closeBtnGall) {
  closeBtnGall.addEventListener("click", closeGalleryModal);
}

const openBtns = document.querySelectorAll(".style__item-hover-btn-gall");
const modal = document.querySelector(".gallery-modal");
const closeBtn = document.querySelector(".gallery-modal-close-mob");

if (openBtns.length && modal && closeBtn) {
  const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      modal.classList.add("active");
    }, 10);
  };

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      modal.style.display = "none";
    }, 600);
  };

  openBtns.forEach((btn) => btn.addEventListener("click", openModal));
  closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}
