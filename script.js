let div = document.querySelector("#speedTest");
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ea sed, tenetur dolor cumque ullam fugiat magnam natus deserunt aperiam perspiciatis libero quaerat, iusto nemo laborum harum, reprehenderit officiis consequatur.";
let time = 60;
let timeHTML = document.querySelector("#time");
let writeHere = "";

function showTime () {
    if (time == 0) {
        timeHTML.innerText = "Time is up!";
        return;
    }
    timeHTML.innerText = time + "s";
    time--;
    setTimeout(showTime, 1000);
}

showTime();

let paragraph = document.createElement("p");
paragraph.innerText = text;
paragraph.id = "textToWrite";
div.appendChild(paragraph);

document.body.addEventListener("keyup", function (e) {
    if (time == 0) {
        alert("Time is up!");
        return;
    } else {
        text = text.toLowerCase();
        let key = e.key;
        key = key.toLowerCase();
        for (let y = 0; y < text.length; y++) {
            if (key == text[y]) {
                console.log(1);
                return;
            }
        }
    }
});