let div = document.querySelector("#speedTest");
let text = "My name is Narcis Lazar, I am a web developer, I live in Romania and I started with web programming in 2017. W3Schools was the site that taught me the basics of programming, I recommend it with confidence.";
let seconds = 59, miliseconds = 99, time;
let timeHTML = document.querySelector("#time");
let writeHere = "";
text = text.toLowerCase();
let pos = 0;
let initialLetter = text[0];
let textToShow = document.querySelector("#textToShow");

function showTime () {
    if (seconds == 0 && miliseconds == 0) {
        timeHTML.innerText = "Time is up!";
        return;
    }
    if (miliseconds <= 9) {
        miliseconds = "0" + miliseconds;
    }
    if (miliseconds == 0) {
        seconds--;
        miliseconds = 99;
    }
    time = seconds + "." + miliseconds;
    timeHTML.innerText = "Remaining time: " + time + "s";
    miliseconds--;
}

let interval2 = setInterval(showTime, 10);

let paragraph = document.createElement("p");
paragraph.innerHTML = text;
paragraph.id = "textToWrite";
div.appendChild(paragraph);

document.body.addEventListener("keyup", function (e) {
    if (time == 0) {
        timeHTML.innerHTML = "Time is up!";
    } else {
        let key = e.key.toLowerCase();

        if (key == initialLetter) {
            textToShow.innerHTML += initialLetter;
            pos++;
            initialLetter = text[pos];
        }
    }
});

let interval = setInterval(() => {
    if (textToShow.innerHTML == text) {
        timeHTML.innerHTML = `Good job! You have done in ${60 - time} seconds!`;
        time = 0;
        clearInterval(interval);
        clearInterval(interval2);
        return;
    }
}, 250);