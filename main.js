"use strict";

const rank = document.querySelector(".rank");
const submit = document.querySelector(".button");
const card = document.querySelector(".card");
const contentCard = document.querySelector(".contentCard");
const thankYouCard = document.querySelector("thankYouCard");

const arrayRank = [1, 2, 3, 4, 5];
let userRank;
let rankActivated = false;
let allRankButtons;

// to create rank items + display them dynamically

arrayRank.map((item) => {
  const rankDiv = document.createElement("div");
  rankDiv.textContent = item;
  rankDiv.dataset.key = item;
  rank.appendChild(rankDiv);
});

allRankButtons = document.querySelectorAll(".rank div");

// to create rank selection system

allRankButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (!rankActivated) {
      item.classList.add("activeRank");
      userRank = item.textContent;
      rankActivated = true;
    } else {
      if (item.classList.contains("activeRank")) {
        item.classList.remove("activeRank");
        rankActivated = false;
      } else {
        allRankButtons.forEach((item) => {
          item.classList.remove("activeRank");
        });
        item.classList.add("activeRank");
        userRank = item.textContent;
        rankActivated = true;
      }
    }
  });
});

// to replace the content of card by the thank you content

submit.addEventListener("click", () => {
  if (userRank) {
    contentCard.innerHTML = "";
    card.innerHTML = `<div class=thankYouContent><div class="rankImgAnduserRank"><img src=./images/illustration-thank-you.svg alt=logoThanks<img/><div class=rankInfo>You selected ${userRank} out of 5</div></div><div class="thanksTextContent">
    <h1>Thank you!</h1><p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p></div></div>`;
  } else {
  }
});
