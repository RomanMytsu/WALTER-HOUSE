const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

if (openMenu && menu) {
  openMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active")
      ? "hidden"
      : "";
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      menu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
