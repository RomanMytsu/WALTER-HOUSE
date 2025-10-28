const btnOpenSteps = document.querySelector(".step__content-title");
const btnCloseSteps = document.querySelector(".step-modal__back-btn");
const modalSteps = document.querySelector(".step-modal");

if (modalSteps) {
  const openModal = () => {
    modalSteps.style.display = "flex";

    setTimeout(() => {
      modalSteps.classList.add("active");
    }, 10);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalSteps.classList.remove("active");

    setTimeout(() => {
      modalSteps.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  };

  if (btnOpenSteps) btnOpenSteps.addEventListener("click", openModal);
  if (btnCloseSteps) btnCloseSteps.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalSteps.classList.contains("active")) {
      closeModal();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1440 && modalSteps.classList.contains("active")) {
      closeModal();
    }
  });

  modalSteps.style.display = "none";
}
