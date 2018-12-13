/*
Aufgabe: Aufgabe 5, WKB Assoziative Arrays
Name: Veronika Garbero
Matrikel: 256581
Datum: 23.11.2018
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a5;
(function (a5) {
    //################################## Eventlistener hinzufügen
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    //################################## Variablen
    let address = "https://eia2w18.herokuapp.com"; // Aufgabe 7.2 
    let name;
    let strasse;
    let hausnr;
    let ort;
    let plz;
    let email;
    let zusatz;
    let label;
    let basketBaumart = [a5.sort[0][0], "" + a5.sort[0][1]];
    let basketHalter = ["bitte Halter auswählen", "0"];
    let basketBeleuchtung = [a5.light[0][0], "" + a5.light[0][1]];
    let basketSchmuck = [];
    let basketLieferung = ["bitte Lieferung auswählen", "0"];
    //################################## createElements
    //################################## Baumart
    function createElements() {
        let sorte = document.getElementById("sorte");
        let select = document.createElement("select");
        let legend1 = document.createElement("legend");
        legend1.id = "Baumart";
        legend1.innerText = "Baumart";
        sorte.appendChild(legend1);
        select.name = "SelectBaumart";
        select.id = "selectBaumart";
        sorte.appendChild(select);
        for (let i = 0; i < a5.artikel.length; i++) {
            if (a5.artikel[i].art == "Sorte") {
                let choice = document.createElement("option");
                choice.innerText = a5.artikel[i].bezeichnung;
                choice.id = "option" + i;
                select.appendChild(choice);
            }
        }
        //################################## Halterung
        let halterung = document.getElementById("halterung");
        let legend2 = document.createElement("legend");
        legend2.id = "Halter";
        legend2.innerText = "Halterung";
        halterung.appendChild(legend2);
        for (let i = 0; i < a5.artikel.length; i++) {
            if (a5.artikel[i].art == "Halter") {
                let radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupHalterung";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                halterung.appendChild(radioB2);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB2.id;
                label.innerText = a5.artikel[i].bezeichnung;
                halterung.appendChild(label);
            }
        }
        //################################## Beleuchtung
        let beleuchtung = document.getElementById("beleuchtung");
        let selectBox2 = document.createElement("select");
        let legend3 = document.createElement("legend");
        legend3.id = "Lichter";
        legend3.innerText = "Beleuchtung";
        beleuchtung.appendChild(legend3);
        for (let i = 0; i < a5.artikel.length; i++) {
            if (a5.artikel[i].art == "Beleuchtung") {
                let checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxBeleuchtung";
                checkB.value = "check";
                checkB.id = "check" + i;
                beleuchtung.appendChild(checkB);
                let label4 = document.createElement("label");
                label4.id = "label4." + i;
                label4.htmlFor = checkB.id;
                label4.innerText = a5.artikel[i].bezeichnung;
                beleuchtung.appendChild(label4);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperBeleuchtung" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "99";
                stepper.step = "1";
                beleuchtung.appendChild(stepper);
                let br = document.createElement("br");
                beleuchtung.appendChild(br);
            }
        }
        //################################## Schmuckartikel
        let schmuckartikel = document.getElementById("schmuckartikel");
        let legend4 = document.createElement("legend");
        legend4.id = "Schmuck";
        legend4.innerText = "Schmuckartikel";
        schmuckartikel.appendChild(legend4);
        for (let i = 0; i < a5.artikel.length; i++) {
            if (a5.artikel[i].art == "Schmuck") {
                let checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                let label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = a5.artikel[i].bezeichnung;
                schmuckartikel.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "99";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                let br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
        //################################## Lieferadresse
        let daten = document.getElementById("daten");
        let legend5 = document.createElement("legend");
        legend5.id = "Daten";
        legend5.innerText = "Lieferadresse";
        daten.appendChild(legend5);
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);
        hausnr = document.createElement("input");
        hausnr.type = "text";
        hausnr.name = "DatenHausnummer";
        hausnr.placeholder = "Hausnummer";
        hausnr.pattern = "[0-9]{1,}";
        hausnr.required = true;
        daten.appendChild(hausnr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        email = document.createElement("input");
        email.type = "email";
        email.name = "DatenMail";
        email.placeholder = "E-Mail";
        email.required = true;
        daten.appendChild(email);
        zusatz = document.createElement("textarea");
        zusatz.name = "DatenZusatz";
        zusatz.placeholder = "Adresszusatz";
        zusatz.cols = 30;
        zusatz.rows = 3;
        zusatz.required = true;
        zusatz.style.backgroundColor = "lightgrey";
        daten.appendChild(zusatz);
        //################################## Lieferoptionen
        let lieferopt = document.getElementById("lieferoptionen");
        let legend6 = document.createElement("legend");
        legend6.id = "Daten";
        legend6.innerText = "Versand";
        lieferopt.appendChild(legend6);
        for (let i = 0; i < a5.artikel.length; i++) {
            if (a5.artikel[i].art == "Lieferung") {
                let radioB3 = document.createElement("input");
                radioB3.type = "radio";
                radioB3.name = "radioGroupLieferoptionen";
                radioB3.value = "radio3." + i;
                radioB3.id = "radio3." + i;
                lieferopt.appendChild(radioB3);
                let label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB3.id;
                label3.innerText = a5.artikel[i].bezeichnung + ", " + a5.artikel[i].preis + "\u20ac";
                lieferopt.appendChild(label3);
            }
        }
        //################################## Button Bestellung pr�fen
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "submit";
        submit.innerText = "Eingaben prüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    //################################## Warenkorb
    function warenkorb(_event) {
        let target = _event.target;
        let stepper = [];
        let checkBoxes = [];
        let gesamtkosten = 0;
        for (let i = 0; i < a5.artikel.length; i++) {
            if (a5.artikel[i].art == "Schmuck") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == a5.artikel[i].bezeichnung && target.id == "selectBaumart") {
                basketBaumart[0] = a5.artikel[i].bezeichnung;
                basketBaumart[1] = "" + a5.artikel[i].preis;
            }
            if (target.id == "radio2." + i) {
                basketHalter[0] = a5.artikel[i].bezeichnung;
                basketHalter[1] = "" + a5.artikel[i].preis;
            }
            if (target.id == "radio3." + i) {
                basketLieferung[0] = a5.artikel[i].bezeichnung;
                basketLieferung[1] = "" + a5.artikel[i].preis;
            }
            if (a5.artikel[i].art == "Beleuchtung") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [a5.artikel[i].bezeichnung, "" + (a5.artikel[i].preis * parseInt(stepper[i].value))];
            }
        }
        let warenkorb = document.getElementById("bestellung");
        warenkorb.style.width = "30%";
        warenkorb.style.height = "auto";
        warenkorb.style.backgroundColor = "black";
        warenkorb.innerHTML = "<span>Einkaufszettel</span><hr>";
        warenkorb.innerHTML += "Baumart: " + basketBaumart[0] + " " + basketBaumart[1] + "0€ <br>";
        warenkorb.innerHTML += "Halterung: " + basketHalter[0] + " " + basketHalter[1] + "0€ <br>";
        /*warenkorb.innerHTML += "Beleuchtung: " + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "0€ <br>";*/
        warenkorb.innerHTML += "Lieferung: " + basketLieferung[0] + " " + basketLieferung[1] + "0€ <br>";
        gesamtkosten = parseFloat(basketBaumart[1]) + parseFloat(basketBeleuchtung[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferung[1]);
        for (let i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtkosten += parseFloat(basketSchmuck[i][1]);
                warenkorb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "0€ <br>";
            }
        }
        warenkorb.innerHTML += "<hr> Gesamtkosten: " + Math.round(gesamtkosten * 100) / 100 + "0€";
    }
    //################################## Eingegebene Daten pr�fen
    function handleMouseDown(_event) {
        let pruefen = document.createElement("div");
        pruefen.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || email.checkValidity() == false) {
            pruefen.innerText = "Bitte überprüfe deine Daten";
            pruefen.style.color = "red";
            document.body.appendChild(pruefen); //Div mit warnung wird erstellt
        }
        else {
            pruefen.innerText = "Vielen Dank, Sie werden nun auf die Bestellseite weitegeleitet!";
            pruefen.style.color = "green";
            document.body.appendChild(pruefen);
        }
    }
    //################################## Aufgabe 7.2
    function handleClick(_event) {
        sendRequestWithCustomData();
    }
    function sendRequestWithCustomData() {
        let xhr = new XMLHttpRequest();
        let async = document.getElementById("asyncForm");
        let asyncForm = "";
        xhr.open("GET", address + "?" + asyncForm, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=main2.js.map