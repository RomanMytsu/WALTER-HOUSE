const servicesArr = [
  {
    title: "Video-surveillance and alarm",
    description:
      "Purchase, installation and setup of video surveillance, both open and hidden, for indoor and outdoor use. Help with registering the system on the security panel.",
  },
  {
    title: "Selection of furniture",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "Household appliances",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "Ultra service",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "Online broadcast of repair",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
];

const itemsServices = document.querySelectorAll(".services__item");
const modalServices = document.querySelector(".services-modal");

if (itemsServices && modalServices) {
  const modalTitleServices = modalServices.querySelector(
    ".services-modal__title"
  );
  const modalDescServices = modalServices.querySelector(
    ".services-modal__text"
  );
  const modalCloseServices = modalServices.querySelector(
    ".services-modal__close-btn"
  );

  const openModal = () => {
    modalServices.style.display = "flex";
    setTimeout(() => {
      modalServices.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalServices.classList.remove("active");
    setTimeout(() => {
      modalServices.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  };

  itemsServices.forEach((item, index) => {
    item.addEventListener("click", () => {
      modalTitleServices.textContent = servicesArr[index].title;
      modalDescServices.textContent = servicesArr[index].description;
      openModal();
    });
  });

  if (modalCloseServices) {
    modalCloseServices.addEventListener("click", closeModal);
  }

  modalServices.addEventListener("click", (e) => {
    if (e.target === modalServices) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalServices.classList.contains("active")) {
      closeModal();
    }
  });

  window.addEventListener("resize", () => {
    if (modalServices.classList.contains("active")) {
      closeModal();
    }
  });

  modalServices.style.display = "none";
}
