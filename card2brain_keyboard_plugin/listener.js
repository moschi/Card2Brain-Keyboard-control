console.log("injected card2brain keyboard control script");
console.log(`
usage:
space = 'Antwort zeigen'
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
    return document.querySelector("div.ad-toggle > a");
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
                console.log(e.keyCode);
                clickElement = null;
                break;
        }

        if (clickElement !== null && clickElement !== undefined) {
            clickElement.click();
        } else {
            console.log(clickElement);
        }
    });
}

window.onload = () => registerEventListeners();