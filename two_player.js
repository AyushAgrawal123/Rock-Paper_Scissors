let rock1 = document.querySelector(".rock1");
let paper1 = document.querySelector(".paper1");
let scissor1 = document.querySelector(".scissor1");
let rock2 = document.querySelector(".rock2");
let paper2 = document.querySelector(".paper2");
let scissor2 = document.querySelector(".scissor2");
let choosen1 = document.querySelector("#choosen1");
let choosen2 = document.querySelector("#choosen2");
let won = document.querySelector("#won");
let reset = document.querySelector("#reset");
let pl1, pl2;
function determineWinner() {

    let r = "./images/rock-emoji.png";
    let p = "./images/paper-emoji.png";
    let s = "./images/scissors-emoji.png";

    if (pl1 == pl2) {
        won.innerHTML = "Tie <img src='./images/facebook-photo.png'>";
    }
    else if (pl1 == r && pl2 == p) {
        won.innerHTML = "Player 2 won <img src='./images/facebook-photo.png'>";
    }
    else if (pl1 == r && pl2 == s) {
        won.innerHTML = "Player 1 won <img src='./images/facebook-photo.png'>";
    }
    else if (pl1 == p && pl2 == r) {
        won.innerHTML = "Player 1 won <img src='./images/facebook-photo.png'>";
    }
    else if (pl1 == p && pl2 == s) {
        won.innerHTML = "Player 2 won <img src='./images/facebook-photo.png'>";

    }
    else if (pl1 == s && pl2 == r) {
        won.innerHTML = "Player 2 won <img src='./images/facebook-photo.png'>";

    }
    else if (pl1 == s && pl2 == p) {
        won.innerHTML = "Player 1 won <img src='./images/facebook-photo.png'>";
    }
}

rock1.addEventListener("click", () => {
    choosen1.src = "./images/rock-emoji.png";
    pl1 = "./images/rock-emoji.png";
    determineWinner();
    determineWinner();
});
paper1.addEventListener("click", () => {
    choosen1.src = "./images/paper-emoji.png";
    pl1 = "./images/paper-emoji.png";
    determineWinner();
});
scissor1.addEventListener("click", () => {
    choosen1.src = "./images/scissors-emoji.png";
    pl1 = "./images/scissors-emoji.png";
    determineWinner();
});
rock2.addEventListener("click", () => {
    choosen2.src = "./images/rock-emoji.png";
    pl2 = "./images/rock-emoji.png";
    determineWinner();
});
paper2.addEventListener("click", () => {
    choosen2.src = "./images/paper-emoji.png";
    pl2 = "./images/paper-emoji.png";
    determineWinner();
});
scissor2.addEventListener("click", () => {
    choosen2.src = "./images/scissors-emoji.png";
    pl2 = "./images/scissors-emoji.png";
    determineWinner();
});
reset.addEventListener("click", () => {
    choosen1.src = "./images/transparent.svg";
    choosen2.src = "./images/transparent.svg";
    won.innerHTML = 'Start Your Game <img src="./images/stencil.facebook-photo.png" alt="">';
});

