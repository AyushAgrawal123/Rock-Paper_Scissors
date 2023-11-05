function result(my_image) {
    let computer_image, won;


    random_image();

    won = document.getElementById("won");
    let r = "./images/rock-emoji.png";
    let p = "./images/paper-emoji.png";
    let s = "./images/scissors-emoji.png";

    function random_image() {
        let list = ["./images/rock-emoji.png", "./images/paper-emoji.png", "./images/scissors-emoji.png"];
        computer_image = list[Math.floor(Math.random(list) * 3)];
    }

    document.getElementById("choosen1").src = my_image;
    document.getElementById("choosen2").src = computer_image;
    if (my_image == computer_image) {
        won.innerHTML = "Tie <img src='./images/facebook-photo.png'>";
    }
    else if (my_image == r && computer_image == p) {
        won.innerHTML = "Computer won <img src='./images/facebook-photo.png'>";
    }
    else if (my_image == r && computer_image == s) {
        won.innerHTML = "You won <img src='./images/facebook-photo.png'>";
    }
    else if (my_image == p && computer_image == r) {
        won.innerHTML = "You won <img src='./images/facebook-photo.png'>";
    }
    else if (my_image == p && computer_image == s) {
        won.innerHTML = "Computer won <img src='./images/facebook-photo.png'>";
    }
    else if (my_image == s && computer_image == r) {
        won.innerHTML = "Computer won <img src='./images/facebook-photo.png'>";
    }
    else if (my_image == s && computer_image == p) {
        won.innerHTML = "You won <img src='./images/facebook-photo.png'>";
    }
}
function reset() {
    document.getElementById("choosen1").src = "./images/transparent.svg";
    document.getElementById("choosen2").src = "./images/transparent.svg";
    won.innerHTML = "Start Your Game <img src='./images/transparent.svg'>";
}