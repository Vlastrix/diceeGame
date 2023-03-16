// Function stolen from the MDN Web Docs about the Math.random()
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const randomNumber1 = getRandomInt(1, 7);
const randomNumber2 = getRandomInt(1, 7);

// Change image based on the random number. 
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

function decideWinner() {
    if (randomNumber1 === randomNumber2) {
        return "⚔️ Draw!";
    } else if (randomNumber1 > randomNumber2) {
        return "🚩 Player 1 Won!";
    } else if (randomNumber1 < randomNumber2) {
        return "Player 2 Won! 🚩";
    }
}

const winner = decideWinner();

document.querySelector("#title").textContent = winner;
