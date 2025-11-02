const points = document.querySelectorAll(".gallery__point");
const modal = document.querySelector(".gallery-mob-modal");
const modalClose = modal.querySelector(".gallery-mob-modal__close-btn");

if (points.length && modal && modalClose) {
  const openModal = () => {
    if (window.innerWidth >= 768) return;

    modal.style.display = "flex";
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
    }, 400);
  };

  points.forEach((point) => {
    point.addEventListener("click", openModal);
  });

  modalClose.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && modal.classList.contains("active")) {
      closeModal();
    }
  });
}
