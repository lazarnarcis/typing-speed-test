let div = document.querySelector("#speedTest");
let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo beatae adipisci distinctio aspernatur omnis temporibus eveniet excepturi nostrum deserunt, quia perferendis totam impedit animi corrupti voluptas hic nesciunt doloribus expedita!";
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
        alert("Time is up or you're done!");
    } else {
        let key = e.key.toLowerCase();

        if (key == initialLetter) {
            textToShow.innerText += initialLetter;
            pos++;
            initialLetter = text[pos];

            if (textToShow.innerText == text) {
                alert(`Good job! You have done in ${time} seconds!`);
                time = 0;
            }
        }
    }
});

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}