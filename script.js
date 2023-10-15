"use strict";

function random() {
  return Math.trunc(Math.random() * 20) + 1;
}

let correctNumber = random();

document.querySelector(".foot-btn").addEventListener("click", function () {
  const number = Number(document.querySelector(".number-input").value);
  let highscore = Number(document.querySelector(".highscore").textContent);
  let score = Number(document.querySelector(".score").textContent);
  let string;

  // if player insert 0 or a negetive number
  if (number <= 0) {
    string = "⛔ Not a Number";
  }
  //if player wins a game
  else if (number === correctNumber) {
    string = "👏 Yessss! You Find It";
    if (score > highscore)
      document.querySelector(".highscore").textContent = score;

    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector(".rectangle").textContent = number;
    document.querySelector(".rectangle").style.width = "300px";
  }
  //if player insert a number bigger than 20
  else if (number > 20) {
    string = "⛔ Not a Valid Number";
  }
  //when the number is different from correct one
  else if (number !== correctNumber) {
    if (score > 1) {
      score--;
      string = number > correctNumber ? "❗ Too High!" : "❗ Too Low!";
    } else {
      string = "❌ You Lost The Game!";
      score = 0;
    }
  }
  document.querySelector(".score").textContent = score;
  document.querySelector(".first-p").textContent = string;
});

document.querySelector(".head-btn").addEventListener("click", function reset() {
  document.querySelector(".first-p").textContent = "Start guessing...";
  correctNumber = random();
  document.querySelector(".score").textContent = 20;
  document.querySelector(".rectangle").style.width = "130px";
  document.querySelector(".rectangle").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number-input").value = "";
});
