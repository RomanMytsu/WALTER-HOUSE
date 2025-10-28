const btnOpenList = document.querySelectorAll(".style__item-hover-btn-services");
const btnCloseList = document.querySelector(".style-list-modal__btn-close");
const modalList = document.querySelector(".style-list-modal");
const titleList = modalList.querySelector(".style-list-modal__title");

if (btnOpenList && modalList) {
  const openModal = (index) => {
    modalList.style.display = "block";
    setTimeout(() => {
      modalList.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
    titleList.textContent = ["elite", "vip", "extra"][index];
  };

  const closeModal = () => {
    modalList.classList.remove("active");
    setTimeout(() => {
      modalList.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  };

  btnOpenList.forEach((btn, index) => {
    btn.addEventListener("click", () => openModal(index));
  });

  if (btnCloseList) {
    btnCloseList.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalList.classList.contains("active")) {
      closeModal();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1440 && modalList.classList.contains("active")) {
      closeModal();
    }
  });

  modalList.style.display = "none";
}
