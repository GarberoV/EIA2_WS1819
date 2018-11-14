/*
Aufgabe: 3, Events UNO
Name: Veronika Garbero
Matrikel: 256581
Datum: 12.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a3;
(function (a3) {
    //################################## Eventlistener hinzuf�gen
    document.addEventListener("DOMContentLoaded", kartenAnzahl);
    document.addEventListener("keydown", pressKeyboard);
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let deck = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "Wunschfarbe" }, { color: "black", value: "Wunschfarbe" }, { color: "black", value: "Wunschfarbe" }, { color: "black", value: "Wunschfarbe" }];
    let ablage = [];
    let handcards = [];
    //################################## Nutzer-Eingabe
    function kartenAnzahl() {
        var kartenanzahl = prompt("Bitte gebe die Anzahl deiner gewuenschten Karten ein:");
        let n = parseInt(kartenanzahl);
        randomCard(n);
        displayHand();
        let button = document.getElementById("sortbutton");
        button.addEventListener("click", sortHandcards);
        let draw = document.getElementById("deck");
        draw.addEventListener("click", drawFromDeck);
    }
    //################################## Karten erstellen
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < 2; k++) {
                let card = { color: colors[i], value: values[j] };
                deck.push(card);
            }
        }
    }
    console.log(deck);
    //################################## Karten anzeigen
    function displayHand() {
        document.getElementById("Handcards").innerHTML = "";
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id = b.toString();
            div.setAttribute("id", id);
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
            // EventListener f�r Karte ablegen
            div.addEventListener("click", PlayCard);
        }
    }
    //################################## Ausgegebene Karten aus Deck entfernen
    function randomCard(_anz) {
        for (let anz = _anz; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
    }
    //################################## Event: Karten auf Deck legen
    function PlayCard(_event) {
        document.getElementById("ablagestapel").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        ablage.push(handcards[index]);
        let div = document.createElement("div");
        document.getElementById("ablagestapel").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }
    //################################## Event: Karten nach Farben sortieren
    function sortHandcards() {
        console.log(handcards);
        document.getElementById("Handcards").innerHTML = "";
        handcards.sort((CardA, CardB) => {
            if (CardA.color > CardB.color)
                return 1;
            if (CardA.color < CardB.color)
                return -1;
            return 0;
        });
        console.log(handcards);
        displayHand();
    }
    //################################## Event: Karte aus Nachziehstapel (Deck) ziehen
    function drawFromDeck() {
        randomCard(1);
        displayHand();
    }
    //################################## Event: Mit Leertaste Karten ziehen
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            drawFromDeck();
        }
    }
})(a3 || (a3 = {}));
//# sourceMappingURL=unoEvents.js.map