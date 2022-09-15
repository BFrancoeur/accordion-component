const elemAccordionItemHeader = document.getElementById(
  "accordion-item-header"
);
const elemObject = document.getElementById("accordion-item-toggle");

const elemAccordionItemBody = document.getElementById("accordion-item-body");

elemAccordionItemHeader.addEventListener("click", () => {
  if (elemObject.getAttribute("data") === "icons/plus-solid.svg") {
    elemObject.setAttribute("data", "icons/minus-solid.svg");
    elemAccordionItemBody.classList.toggle("open");
  } else {
    elemObject.setAttribute("data", "icons/plus-solid.svg");
    elemAccordionItemBody.classList.toggle("open");
  }
});
