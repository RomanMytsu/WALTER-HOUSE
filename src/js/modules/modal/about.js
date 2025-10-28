const btnOpenAbout = document.querySelector(".about__btn");
const btnCloseAbout = document.querySelector(".modal-about__back-home-btn");
const modalAbout = document.querySelector(".modal-about");

function openModal() {
  if (!modalAbout) return;
  modalAbout.style.display = "flex"; // или 'block' — зависит от вёрстки
  setTimeout(() => modalAbout.classList.add("active"), 10); // небольшая задержка для анимации
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalAbout) return;
  modalAbout.classList.remove("active");
  document.body.style.overflow = "";
  // ждём окончания анимации, потом убираем из потока
  modalAbout.addEventListener(
    "transitionend",
    () => {
      if (!modalAbout.classList.contains("active")) {
        modalAbout.style.display = "none";
      }
    },
    { once: true }
  );
}

if (btnOpenAbout) {
  btnOpenAbout.addEventListener("click", openModal);
}

if (btnCloseAbout) {
  btnCloseAbout.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalAbout.classList.contains("active")) {
      closeModal();
    }
  });
}

if (modalAbout) {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1440 && modalAbout.classList.contains("active")) {
      closeModal();
    }
  });
}
