const accordions = Array.from(document.querySelectorAll(".accordion"));

accordions.forEach((accordion) => {
  const accordionHeader = accordion.querySelector(".accordion-header");
  const accordionIcon = accordion.querySelector(".img");
  const accordionBody = accordion.querySelector(".accordion-body");

  accordionHeader.addEventListener("click", (event) => {
    accordionIcon.classList.toggle("close");
    accordionBody.classList.toggle("is-open");
  });
});
