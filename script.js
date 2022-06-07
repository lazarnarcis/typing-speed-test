let div = document.querySelector("#speedTest");
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ea sed, tenetur dolor cumque ullam fugiat magnam natus deserunt aperiam perspiciatis libero quaerat, iusto nemo laborum harum, reprehenderit officiis consequatur.";
let time = 60;
let timeHTML = document.querySelector("#time");
let writeHere = "";
text = text.toLowerCase();
let pos = 0;
let initialLetter = text[0];

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
paragraph.innerHTML = text;
paragraph.id = "textToWrite";
div.appendChild(paragraph);

document.body.addEventListener("keyup", function (e) {
    if (time == 0) {
        alert("Time is up!");
    } else {
        let key = e.key.toLowerCase();

        if (key == initialLetter) {
            paragraph.innerHTML = text.replaceAt(pos, `<span style='background-color: red;'>${key}</span>`);
            console.log(initialLetter);
            console.log(pos);
            pos++;
            initialLetter = text[pos];
        }
    }
});

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}