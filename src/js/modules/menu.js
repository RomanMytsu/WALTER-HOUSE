const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

if (openMenu && menu) {
  const open = () => {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    menu.classList.remove("active");
    setTimeout(() => {
      menu.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  };

  openMenu.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      close();
    } else {
      open();
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      close();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      close();
    }
  });

  menu.style.display = "none";
}
