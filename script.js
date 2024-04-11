"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // closeBtn.classList.add("hidden");
  });

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
    // modal.classList.add("hidden");
    // overlay.classList.add("hidden");
  }
});
