/*
Aufgabe: 2, UNO
Name: Veronika Garbero
Matrikel: 256581
Datum: 25.10.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a2;
(function (a2) {
    function UNO() {
        let c0 = {
            name: "0",
            green: 1,
            red: 1,
            blue: 1,
            yellow: 1 // Anzahl, Karte in gelb
        };
        let c1 = {
            name: "1",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c2 = {
            name: "2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c3 = {
            name: "3",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c4 = {
            name: "4",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c5 = {
            name: "5",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c6 = {
            name: "6",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c7 = {
            name: "7",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c8 = {
            name: "8",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let c9 = {
            name: "9",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let cdirection = {
            name: "Richtungswechsel",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let cexpose = {
            name: "Aussetzen",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let cplus2 = {
            name: "+2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        let cwish = 4; // 4 Wunschkarten
        let cwishplus4 = 4; // 4 Wunschkarten +4 ziehen
        let allcards = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, cdirection, cexpose, cplus2]; // Array der Karten ohne Wunschkarten
        let color = ""; // color wird als string festgelegt 
        /* Eingabefenster f�r Nutzer */
        let x;
        let input = prompt("Bitte gebe die Anzahl deiner gewuenschten Karten ein:"); // Eingabefenster f�r die gew�nschte Anzahl an Karten
        x = Number(input);
        function getRandom(n) {
            return Math.floor(Math.random() * Math.floor(n)); // Math.floor = rundet den Wert von n auf die n�chste ganze Zahl AB... Math.random gibt eine zuf�llige Zahl zw. 0 und 1 zur�ck
        }
        ;
        function createCard(_color, _n, _x) {
            let div = document.createElement("div");
            document.body.appendChild(div); // dem HTML-Element <body> wird ein div hinzugef�gt
            div.setAttribute("id", "hand" + _x); // f�gt das angegebene Attribut einem Element hinzu und gibt ihm den angegebenen Wert
            document.getElementById("hand" + _x).innerHTML += _n;
            let s = div.style; //Karten werden hier gestaltet
            s.fontSize = 20 + "px";
            s.fontFamily = "Kite One, sans-serif";
            s.border = "solid white";
            s.paddingTop = 110 + "px";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 155 + "px";
            s.height = 150 + "px";
            s.bottom = 35 + "px";
            s.left = (_x + 0.53) * 120 + "px";
            s.borderRadius = 10 + "px";
            if (color == "#000000") {
                s.color = "white";
            }
        }
        for (let i = 0; i < x; i++) {
            let l = getRandom(15); // Zufallsgenerator, 13 farbige Karten und 2 schwarze Karten
            if (l == 13 && cwish > 0) {
                color = "#000000";
                cwish--; //"gezogene" Karte wird vom Kartendeck abgezogen, damit die gleiche Karte nicht noch einmal gezogen wird
                createCard(color, "+4", i);
                continue; //springt wieder zum Anfang der for-schleife
            }
            else if (l == 13 && cwish <= 0) {
                i--;
                continue;
            }
            else {
                i;
                if (l == 14 && cwishplus4 > 0) {
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
                    let y = getRandom(4); // Zuf�llige Ermittlung der Farben
                    switch (y) {
                        case 0:
                            color = "#ff3333";
                            if (allcards[l].red > 0) {
                                createCard(color, allcards[l].name, i);
                                allcards[l].red--;
                                continue; // springt aus Schleife raus und beginnt wieder am Anfang der Schleife
                            }
                        case 1:
                            color = "#47d147";
                            if (allcards[l].green > 0) {
                                createCard(color, allcards[l].name, i);
                                allcards[l].green--;
                                continue;
                            }
                        case 2:
                            color = "#3366ff";
                            if (allcards[l].blue > 0) {
                                createCard(color, allcards[l].name, i);
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
                                continue;
                            }
                    }
                }
            }
        }
    }
    document.addEventListener("DOMContentLoaded", (UNO));
})(a2 || (a2 = {}));
//# sourceMappingURL=a2.js.map