let div = document.querySelector("#speedTest");
let text = "My name is Narcis Lazar, I am a web developer, I live in Romania and I started with web programming in 2017. W3Schools was the site that taught me the basics of programming, I recommend it with confidence.";
let time = 60;
let timeHTML = document.querySelector("#time");
let writeHere = "";
text = text.toLowerCase();
let pos = 0;
let initialLetter = text[0];
let textToShow = document.querySelector("#textToShow");

function showTime () {
    if (time == 0) {
        timeHTML.innerText = "Time is up or you're done!";
        return;
    }
    timeHTML.innerText = "Remaining time: " + time + "s";
    time--;
    setTimeout(showTime, 1000);
}

showTime();

let paragraph = document.createElement("p");
paragraph.innerHTML = text;
paragraph.id = "textToWrite";
div.appendChild(paragraph);

document.body.addEventListener("keyup", function (e) {
    if (time == 0) {
        alert("Time is up or you're done!");
    } else {
        let key = e.key.toLowerCase();

        if (key == initialLetter) {
            if (textToShow.innerText == text) {
                alert(`Good job! You have done in ${time} seconds!`);
                time = 0;
                return;
            }
            textToShow.innerHTML += initialLetter;
            pos++;
            initialLetter = text[pos];
        }
    }
});