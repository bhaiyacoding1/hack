// document.querySelector("#open").addEventListener("click", () => {
//   console.log("jyy");
//   document.querySelector(".mobile-nav").style.right = "0";
//   document.querySelector(".hero-section").style.zIndex = "4";
// })
// document.querySelector("#close").addEventListener("click", () => {
//   console.log("by");
//   document.querySelector(".mobile-nav").style.right = "-100%";
//   document.querySelector(".hero-section").style.zIndex = "5";

// })


// -----------------CARD JAVASCRIPT---------------------

console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);


// ---------------------------typewriter---------------------------

document.addEventListener('DOMContentLoaded', function () {
  const text = `
import React from 'react';
  function App() {
    return (
      <div>
        <h1>Hello,Friend</h1>
        <p>Wlcome to Code Bounty</p>
      </div>
       );
    }
  export default App;
`;

  const codeElement = document.getElementById("react-code");
  const delay = 40; // Delay in milliseconds between each character
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      codeElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, delay);
    }
  }

  // Start typing when the DOM content is loaded
  typeWriter();
});

// -------------------------vanilla-js-card-hover---------------------

VanillaTilt.init(document.querySelectorAll(".type-rider-div,.card"), {
  max: 8,
  speed: 200
});




// ------------------------------services box---------------------------------

// const boxViews = document.querySelectorAll(".services-box"),
//   boxBtns = document.querySelectorAll(".services-button"),
//   boxCloses = document.querySelectorAll(".services-box-close");

// let box = function (boxClick) {
//   boxViews[boxClick].classList.add("active-box");
// };

// boxBtns.forEach((boxBtn, i) => {
//   boxBtn.addEventListener("click", () => {
//     console.log("hyyyyy");
//     box(i); 
//   });
// });

// boxCloses.forEach((boxClose) => {
//   boxClose.addEventListener("click", () => {
//     boxViews.forEach((boxView) => {
//       console.log("hyyyy");
//       boxView.classList.remove("active-box");
//     });
//   });
// });

