/*
Aufgabe: 0
Name: Veronika Garbero
Matrikel: 256581
Datum: 07.10.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe0 {

function getName(){
    
    var name = prompt("Bitte gebe deinen Namen ein:"," ");
        document.write("Herzlich Willkommen, " ,name);  
    console.log ("Herzlich Willkommen ", name);    
}
    document.addEventListener('DOMContentLoaded', getName);
    
}