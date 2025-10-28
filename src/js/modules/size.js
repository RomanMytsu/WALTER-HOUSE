const variantButtons = document.querySelectorAll(".size__variant-btn");
const lineWrapper = document.querySelector(".size__line-hover-wrapper");
const priceElement = document.querySelector(".size__price-num");

const variants = ["elite", "vip", "extra"];
const prices = {
  elite: 233000,
  vip: 300000,
  extra: 350000,
};

variantButtons.forEach((btn, i) => {
  const variant = variants[i];

  btn.addEventListener("mouseenter", () => {
    lineWrapper.classList.add(`hover-${variant}`);
    btn.classList.add("active");
  });

  btn.addEventListener("mouseleave", () => {
    if (!btn.classList.contains("selected")) {
      lineWrapper.classList.remove(`hover-${variant}`);
      btn.classList.remove("active");
    }
  });

  btn.addEventListener("click", () => {
    variantButtons.forEach((b, j) => {
      const v = variants[j];
      b.classList.remove("selected", "active");
      lineWrapper.classList.remove(`hover-${v}`);
    });

    btn.classList.add("selected", "active");
    lineWrapper.classList.add(`hover-${variant}`);

    priceElement.textContent = prices[variant];
  });
});

const defaultVariant = "elite";
const defaultBtn = variantButtons[0];

defaultBtn.classList.add("selected", "active");
lineWrapper.classList.add(`hover-${defaultVariant}`);
priceElement.textContent = prices[defaultVariant];
