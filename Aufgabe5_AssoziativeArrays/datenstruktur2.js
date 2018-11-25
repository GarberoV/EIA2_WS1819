/*
Aufgabe: Aufgabe 5, FormElements: Weihnachtsbaumkonfigurator
Name: Veronika Garbero
Matrikel: 256581
Datum: 25.11.2018
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a5;
(function (a5) {
    a5.artikel = [
        { art: "Sorte", bezeichnung: "Weisser Weihnachtsbaum", preis: 26.90 },
        { art: "Sorte", bezeichnung: "Berkshire Bergtanne", preis: 34.90 },
        { art: "Sorte", bezeichnung: "Alpen Weihnachtsbaum", preis: 18.90 },
        { art: "Sorte", bezeichnung: "Nordmanntanne", preis: 20.90 },
        { art: "Halter", bezeichnung: "Aluminiumguss", preis: 11.90 },
        { art: "Halter", bezeichnung: "Gusseisen", preis: 14.90 },
        { art: "Beleuchtung", bezeichnung: "Lichterkette Kaltweiß", preis: 24.90 },
        { art: "Beleuchtung", bezeichnung: "Lichterkette Warmweiß", preis: 29.90 },
        { art: "Beleuchtung", bezeichnung: "Kerzen 15 Stück", preis: 15.90 },
        { art: "Beleuchtung", bezeichnung: "ohne Beleuchtung", preis: 0.00 },
        { art: "Schmuck", bezeichnung: "Rosa Kugel", preis: 0.99 },
        { art: "Schmuck", bezeichnung: "Schwarze Kugel", preis: 1.90 },
        { art: "Schmuck", bezeichnung: "Silberne Herzkugel", preis: 0.99 },
        { art: "Schmuck", bezeichnung: "Gruene Kugel", preis: 0.99 },
        { art: "Schmuck", bezeichnung: "Rote Kugel", preis: 0.99 },
        { art: "Schmuck", bezeichnung: "Blaue Kugel", preis: 0.99 },
        { art: "Schmuck", bezeichnung: "Feder Kugel", preis: 1.90 },
        { art: "Schmuck", bezeichnung: "Rot-Glitzer Kugel", preis: 1.50 },
        { art: "Schmuck", bezeichnung: "Weiss-blaue Schleife", preis: 3.50 },
        { art: "Schmuck", bezeichnung: "Rote Schleife", preis: 3.90 },
        { art: "Lieferung", bezeichnung: "Standard", preis: 2.90 },
        { art: "Lieferung", bezeichnung: "Overnight", preis: 6.90 }
    ];
    a5.sort = [];
    a5.light = [];
    for (var i = 0; i < a5.artikel.length; i++) {
        if (a5.artikel[i].art == "Sorte") {
            var temp = [a5.artikel[i].bezeichnung, a5.artikel[i].preis];
            a5.sort.push(temp);
        }
        if (a5.artikel[i].art == "Beleuchtung") {
            var temp = [a5.artikel[i].bezeichnung, a5.artikel[i].preis];
            a5.light.push(temp);
        }
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=datenstruktur2.js.map