console.log("injected card2brain keyboard control script");
console.log(`usage:
space = 'Antwort zeigen / Antwort prüfen'
j = 'Gewusst'
n = 'Nicht gewusst'
s = 'Nächste Karte'
`)

function getKnowAnswer() {
    return document.getElementById("knowAnswer");
}

function getDontKnowAnswer() {
    return document.getElementById("dontKnowAnswer");
}

function getShowAnswer() {
    let showAnswerButton = document.querySelector("div.ad-toggle > a");

    if (showAnswerButton === undefined) {
        showAnswerButton = document.getElementById("checkAnswer");
    }

    return showAnswerButton;
}

function getNextCard() {
    return document.querySelector("#nextCardAjaxForm > button");
}

function registerEventListeners() {
    console.log("registering listeners...");
    document.addEventListener("keypress", function (e) {
        e.preventDefault();
        let clickElement = null;
        switch (e.keyCode) {
            case 32: // space
                clickElement = getShowAnswer();
                break;
            case 106: // j
                clickElement = getKnowAnswer();
                break;
            case 110: // n
                clickElement = getDontKnowAnswer();
                break;
            case 115: // s
                clickElement = getNextCard();
                break;
            default:
                clickElement = null;
                break;
        }

        if (clickElement !== null && clickElement !== undefined) {
            clickElement.click();
        }
    });
}

window.onload = () => registerEventListeners();