import * as Http from "http"; // erstellt ein http-Objekt im Code. Anschlie�end sucht der Interpreter nach jedem m�glichen Import im http-Modul und h�ngt es nacheinander an das http-Objekt im Code an.

namespace L06_SendData {
    console.log("Starting server"); // Konsolenausgabe zum Testen
    let port: number = process.env.PORT; // Das was im PORT ist, wird in der Variable Port als Number gespeichert. 
    if (port == undefined) // Wenn port undefiniert ist, ist port = 8100
        port = 8100;

    let server: Http.Server = Http.createServer(); // Variable server ist vom Typ Http.Server -> erstelle einen http server
    server.addListener("request", handleRequest); // Dem Server einen Eventlistener hinzuf�gen, der bei einer Anfrage ausgel�st wird
    server.addListener("listening", handleListen); // Listener wartet auf eingehende Daten
    server.listen(port); // H�rt auf angegebenen Port

    function handleListen(): void {
        console.log("Listening"); // Konsole gibt Listening aus 
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Parameter request ist die einkommende Nachricht und response die Antwort
        console.log(_request.url); // Konsolenausgabe

        _response.setHeader("content-type", "text/html; charset=utf-8"); // Paramenter response -> CSS Header
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Eine Antwort, die dem Browser erlaubt, dass Code von einem beliebigen Ursprung auf eine Ressource zugreifen kann

        _response.write(_request.url); // Antwort wird in angefragte URL geschrieben 
        
        _response.end(); //Der Inhalt von Response wird vom Client gesendet und es wird signalisiert das jene Anfrage vollst�ndig gesendet wurde
    }
}