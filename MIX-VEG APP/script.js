const btnQuote = document.getElementById("btnQuote");
const output = document.querySelector(".output");
const btnGuess = document.getElementById("btnGuess");
const input = document.getElementById("input");
const wrng = document.querySelector('.wrng');
const guesses = document.getElementById("guesses");

let quote = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out"
];

let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

btnQuote.addEventListener("click", () => {
    console.log("Quote button clicked");
    let random = Math.floor(Math.random() * quote.length);
    output.textContent = quote[random];
});

btnGuess.addEventListener("click", () => {
    guessNumber();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        guessNumber();
    }
});

function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrng.innerHTML = "Enter a number between 1 to 100";
    } else {
        numGuesses++;
        guesses.innerHTML = "No. of Guesses: " + numGuesses;
        if (input.value > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (input.value < answer) {
            wrng.innerHTML = "You guessed too low!";
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations! You guessed the correct number in " + numGuesses + " guesses!";
            btnGuess.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    wrng.innerHTML = "";
    btnGuess.disabled = false;
    guesses.innerHTML = "No. of Guesses: 0";
}
