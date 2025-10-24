const btnOpenCall = document.querySelector(".header__call-btn");
const btnCloseCall = document.querySelector(".call__close-btn");
const call = document.querySelector(".call");

const btnFormCall = document.querySelector(".call__content-form-btn");

const formCall = document.querySelector(".call__content-form");
const respondCall = document.querySelector(".call__content-respond");

const btnBackCall = document.querySelector(".call__content-btn-return");

if (formCall && respondCall) {
  formCall.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = formCall.querySelectorAll("input");
    let valid = true;

    inputs.forEach((i) => {
      const div = i.closest(".call__content-form-input");
      const err = i.nextElementSibling;

      if (err) {
        err.remove();
      }

      if (!i.value.trim()) {
        i.classList.add("err");
        const msg = document.createElement("div");
        msg.classList.add("err-mess");
        msg.innerText = "Please fill out this field.";
        div.appendChild(msg);
        valid = false;
      } else {
        i.classList.remove("err");
      }
    });

    if (valid) {
      formCall.style.display = "none";
      respondCall.classList.add("active");

      inputs.forEach((i) => (i.value = ""));
    }
  });
}

if (btnOpenCall && call) {
  btnOpenCall.addEventListener("click", () => {
    const inputs = formCall.querySelectorAll("input");
    inputs.forEach((i) => {
      i.value = "";
      i.classList.remove("err");
      const errMsg = i.nextElementSibling;
      if (errMsg && errMsg.classList.contains("err-mess")) {
        errMsg.remove();
      }
    });

    formCall.style.display = "";
    respondCall.classList.remove("active");

    call.style.display = "flex";
    setTimeout(() => call.classList.add("active"), 10);
    document.body.style.overflow = "hidden";
  });
}

function closeCallModal() {
  call.classList.remove("active");
  document.body.style.overflow = "";
  setTimeout(() => {
    call.style.display = "none";
    formCall.style.display = "";
    respondCall.classList.remove("active");
  }, 300);
}

if (btnCloseCall) {
  btnCloseCall.addEventListener("click", closeCallModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && call.classList.contains("active")) {
      closeCallModal();
    }
  });
}

if (btnBackCall) {
  btnBackCall.addEventListener("click", closeCallModal);
}
