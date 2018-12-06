"use strict";
const Http = require("http"); // erstellt ein http-Objekt im Code. Anschlie�end sucht der Interpreter nach jedem m�glichen Import im http-Modul und h�ngt es nacheinander an das http-Objekt im Code an.
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // Konsolenausgabe zum Testen
    let port = process.env.PORT; // Das was im PORT ist, wird in der Variable Port als Number gespeichert. 
    if (port == undefined)
        port = 8100;
    let server = Http.createServer(); // Variable server ist vom Typ Http.Server -> erstelle einen http server
    server.addListener("request", handleRequest); // Dem Server einen Eventlistener hinzuf�gen, der bei einer Anfrage ausgel�st wird
    server.addListener("listening", handleListen); // Listener wartet auf eingehende Daten
    server.listen(port); // H�rt auf angegebenen Port
    function handleListen() {
        console.log("Listening"); // Konsole gibt Listening aus 
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); // Konsolenausgabe
        /* let query: Url.Url = Url.parse(_request.url, true).query;*/
        let query = Url.parse(_request.url, true).query;
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Paramenter response -> CSS Header
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Eine Antwort, die dem Browser erlaubt, dass Code von einem beliebigen Ursprung auf eine Ressource zugreifen kann
        /* _response.write("hallo");
         console.log(query);*/
        for (let key in query) {
            console.log(query[key]);
            _response.write(key + ": " + query[key] + "<br>");
        }
        _response.end(); //Der Inhalt von Response wird vom Client gesendet und es wird signalisiert das jene Anfrage vollst�ndig gesendet wurde
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map