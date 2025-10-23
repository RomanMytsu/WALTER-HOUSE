const moreServicesButton = document.querySelector(".services__btn-mob");
const servicesList = document.querySelector(".services__list");

if (moreServicesButton) {
  moreServicesButton.addEventListener("click", () => {
    servicesList.classList.add("open");
    moreServicesButton.style.display = "none";
  });
}
