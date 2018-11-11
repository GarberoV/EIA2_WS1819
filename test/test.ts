/*
Aufgabe: 2, UNO
Name: Veronika Garbero
Matrikel: 256581
Datum: 07.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a3 {
    
function UNO() {
    
    interface card {
            name: string;
            blue: number;
            red: number;
            green: number;
            yellow: number; 
        }
    
    let c0: card = {
            name: "0", // Name, der auf der Karte stehen wird
            green: 1,  // Anzahl, wie oft es die Karte in grün gibt
            red: 1,    // Anzahl, Karte in rot
            blue: 1,   // Anzahl, Karte in blau
            yellow: 1  // Anzahl, Karte in gelb
            
        }
    
    let c1: card = {
            name: "1",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
            
        }

        let c2: card = {
            name: "2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2

        }

        let c3: card = {
            name: "3",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c4: card = {
            name: "4",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c5: card = {
            name: "5",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c6: card = {
            name: "6",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c7: card = {
            name: "7",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c8: card = {
            name: "8",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c9: card = {
            name: "9",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cdirection: card = {
            name: "Richtungswechsel",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cexpose: card = {
            name: "Aussetzen",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cplus2: card = {
            name: "+2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }
    
        let cwish: number = 4; // 4 Wunschkarten
        let cwishplus4: number = 4; // 4 Wunschkarten +4 ziehen
    
        let allcards: card[] = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, cdirection, cexpose, cplus2]; // Array der Karten ohne Wunschkarten
        let color: string = ""; // color wird als string festgelegt 
    
            /* Eingabefenster für Nutzer */
            let x: number;
            let input: string = prompt("Bitte gebe die Anzahl deiner gewuenschten Karten ein:"); // Eingabefenster für die gewünschte Anzahl an Karten
            x = Number(input);

            function getRandom(n: number) { 
            return Math.floor(Math.random() * Math.floor(n)); // Math.floor = rundet den Wert von n auf die nächste ganze Zahl AB... Math.random gibt eine zufällige Zahl zw. 0 und 1 zurück
            };
    
    
    
        function createCard(_color: string, _n: string, _x: number): void { // Karten werden hier erstellt
                let div: HTMLDivElement = document.createElement("div");
                document.body.appendChild(div); // dem HTML-Element <body> wird ein div hinzugefügt
                div.setAttribute("id", "hand" + _x) // fügt das angegebene Attribut einem Element hinzu und gibt ihm den angegebenen Wert
                document.getElementById("hand" + _x).innerHTML += _n; 

                let s: CSSStyleDeclaration = div.style; //Karten werden hier gestaltet
                s.fontSize = 20 + "px";
                s.fontFamily = "Kite One, sans-serif"; 
                s.border = "solid white";
                s.paddingTop = 110 + "px";
                s.textAlign = "center";
                s.position = "absolute";
                s.backgroundColor = _color;
                s.width = 155 + "px";
                s.height = 130 + "px";
                s.bottom = 35+ "px";
                s.left = (_x + 1.15) * 120 + "px";
                s.borderRadius = 10+ "px";

                if (color == "#000000") { //Schriftfarbe wird weiss bei schwarzem Hintergrund
                    s.color = "white";
                }
            }
    
    for (let i: number = 0; i < x; i++) { // 
                let l = getRandom(15); // Zufallsgenerator, 13 farbige Karten und 2 schwarze Karten
                if (l == 13 && cwish > 0) { // Wunschkarte cwish
                    color = "#000000";
                    cwish--; //"gezogene" Karte wird vom Kartendeck abgezogen, damit die gleiche Karte nicht noch einmal gezogen wird
                    createCard(color, "+4", i);
                    continue; //springt wieder zum Anfang der for-schleife
                }
                 else if (l == 13 && cwish <= 0) { //farbige Karten
                    i--;
                    continue;
                }
                else {i
                    if (l == 14 && cwishplus4 > 0) { // Wunschkarte + 4 ziehen
                        color = "#000000";
                        cwishplus4--;
                        createCard(color, "Wunschfarbe", i);
                        continue;
                    }
                    else if (l == 14 && cwishplus4 <= 0) {
                        i--;
                        continue;
                    }
                    else {
                        let y: number = getRandom(4);  // Zufällige Ermittlung der Farben
                        switch (y) {
                            case 0:
                                color = "#ff3333";
                                if (allcards[l].red > 0) {
                                    createCard(color, allcards[l].name, i);
                                    allcards[l].red--;
                                    continue; // springt aus Schleife raus und beginnt wieder am Anfang der Schleife
                                }
                            case 1:
                                color = "#47d147"
                                if (allcards[l].green > 0) {
                                    createCard(color, allcards[l].name, i);
                                    allcards[l].green--;
                                    continue;
                                }

                            case 2:
                                color = "#3366ff";
                                if (allcards[l].blue > 0) {
                                    createCard(color,allcards[l].name, i);
                                    allcards[l].blue--;
                                    continue;
                                }

                            case 3:
                                color = "#ffd633";
                                if (allcards[l].yellow > 0) {
                                    createCard(color, allcards[l].name, i);
                                    allcards[l].yellow--;
                                    continue;
                                }
                                else {
                                    i--;
                                    continue
                                }

                        }

                    }

                }
            }
      }
    
     document.addEventListener("DOMContentLoaded", (UNO));
    
}
 
       