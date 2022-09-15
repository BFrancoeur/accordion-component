// create base html with button

// create modal that fills viewport

// trigger modal display on click

// close modal
const elemModalButton = document.getElementById("open-modal");
const elemModal = document.getElementById("modal");
const elemCloseBtn = document.getElementById("close-btn");

elemModalButton.addEventListener("click", () => {
  elemModal.classList.add("open");
  elemModal.classList.remove("close");
});

elemCloseBtn.addEventListener("click", () => {
  elemModal.classList.add("close");
  elemModal.classList.remove("open");
});
