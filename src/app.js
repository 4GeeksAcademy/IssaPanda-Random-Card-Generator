import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let suits = ["♦", "♥", "♠", "♣"];

window.onload = function randomCard() {
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  let suit = suits[Math.floor(Math.random() * suits.length)];

  let myCard = document.querySelector("#my-card");
  myCard.innerHTML = `
    <h2 class="col-5 text-start">${suit}</h2>
    <h2 class="col-5">${number}</h2>
    <h2 class="col-5 text-end">${suit}</h2>
  `;

  if (suit === "♦" || suit === "♥") {
    myCard.style.color = "red";
  } else {
    myCard.style.color = "black";
  }
};
