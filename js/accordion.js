const accordions = Array.from(document.querySelectorAll(".accordion"));

accordions.forEach((accordion) => {
  const accordionHeader = accordion.querySelector(".accordion-header");
  const accordionIcon = accordion.querySelector(".accordion-icon");
  const accordionBody = accordion.querySelector(".accordion-body");

  accordionHeader.addEventListener("click", (event) => {
    if (accordionIcon.getAttribute("src") === "icons/plus-solid.svg") {
      accordionIcon.src = "icons/minus-solid.svg";
    } else {
      return (accordionIcon.src = "icons/plus-solid.svg");
    }
  });

  accordionHeader.addEventListener("click", (event) => {
    accordionBody.classList.toggle("is-open");
  });
});
