/*
Aufgabe: 3, Events UNO
Name: Veronika Garbero
Matrikel: 256581
Datum: 12.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a3 {
    
//################################## Eventlistener hinzufügen

    document.addEventListener("DOMContentLoaded", kartenAnzahl); // Wenn Eingabefenster erscheint, ist DOM geladen
    document.addEventListener("keydown", pressKeyboard); // Klick auf Leertaste
    
//################################## Variablen

    interface Cards {
        color: string;
        value: string;
    }

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let deck: Cards[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "Wunschfarbe" }, { color: "black", value: "Wunschfarbe" }, { color: "black", value: "Wunschfarbe" }, { color: "black", value: "Wunschfarbe" }];
    let ablage: Cards[] = [];
    
    let handcards: Cards[] = [];
    
//################################## Nutzer-Eingabe

    function kartenAnzahl(): void {
        var kartenanzahl: string = prompt("Bitte gebe die Anzahl deiner gewuenschten Karten ein:");
        let n: number = parseInt(kartenanzahl); // Gibt einen String als Zahl zurück

        randomCard(n);
        displayHand(); // Funktion weiter unten

        let button: HTMLElement = document.getElementById("sortbutton"); 
        button.addEventListener("click",sortHandcards);

        let draw: HTMLElement = document.getElementById("deck");
        draw.addEventListener("click", drawFromDeck); 

    }
    
//################################## Karten erstellen
    
     for (let i: number = 0; i < colors.length; i++) {
        for (let j: number = 0; j < values.length; j++) {
            for (let k: number = 0; k < 2; k++) {   // k < 2, weil 2 schwarze Karten
                let card: Cards = { color: colors[i], value: values[j]}; 
                deck.push(card);  
            }
        }
    }
    console.log(deck);

//################################## Karten anzeigen
    
      function displayHand(): void {

        document.getElementById("Handcards").innerHTML = "";
        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;  // Den Handkarten werden Werte hinzugefügt
            let id: string = b.toString();  // Gibt einen String als Objekt zurück
            div.setAttribute("id", id);
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color); // Den Karten werden Farben hinzugefügt, add = fügt angegebene Klassenwerte hinzu
            // EventListener für Karte ablegen
            div.addEventListener("click", PlayCard);

        }
    }
    
//################################## Ausgegebene Karten aus Deck entfernen

    function randomCard(_anz: number): void {
        for (let anz: number = _anz; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
    }
    
    
//################################## Event: Karten auf Deck legen
     
  
 function PlayCard(_event: MouseEvent): void {
        document.getElementById("ablagestapel").innerHTML = "";
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        ablage.push(handcards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("ablagestapel").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }


//################################## Event: Karten nach Farben sortieren
    
    function sortHandcards() : void{
       console.log(handcards);
       document.getElementById("Handcards").innerHTML="";
       handcards.sort(( CardA: Cards, CardB: Cards)=>{
       if (CardA.color > CardB.color) return 1;
       if (CardA.color < CardB.color) return -1;
       return 0;
       });
     
        console.log(handcards);
        displayHand();
        
  }      
    
    
//################################## Event: Karte aus Nachziehstapel (Deck) ziehen
    
    
    function drawFromDeck(): void {
        randomCard(1);      
        displayHand();

    }
    
//################################## Event: Mit Leertaste Karten ziehen

    
    function pressKeyboard(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) { // 32 ist der Wert für space, jede Taste hat einen anderen Wert
            drawFromDeck();
        }
    }    
}