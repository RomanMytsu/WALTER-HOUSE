const sizeArr = [
  {
    title: "elite",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "vip",
    description:
      "The VIP style price includes all the basic work needed for a great renovation.",
  },
  {
    title: "extra",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
];

const openModalSize = document.querySelectorAll(".size__variant-btn");
const modalSize = document.querySelector(".size-modal-mob");

const modalTitleSize = modalSize.querySelector(
  ".size-modal-mob__info-title span"
);
const modalDescSize = modalSize.querySelector(".size-modal-mob__info-desc p");
const modalCloseSize = modalSize.querySelector(".size-modal-mob__close-btn");

openModalSize.forEach((item, index) => {
  item.addEventListener("click", () => {
    modalTitleSize.textContent = sizeArr[index].title;
    modalDescSize.textContent = sizeArr[index].description;
    showModal();
  });
});

if (modalCloseSize) {
  modalCloseSize.addEventListener("click", closeModal);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1439 && modalSize.classList.contains("active")) {
    closeModal();
  }
});

function showModal() {
  modalSize.style.display = "flex";
  setTimeout(() => {
    modalSize.classList.add("active"); 
  }, 10);

  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalSize.classList.remove("active");
  document.body.style.overflow = "";
  setTimeout(() => {
    if (!modalSize.classList.contains("active")) {
      modalSize.style.display = "none";
    }
  }, 400);
}
