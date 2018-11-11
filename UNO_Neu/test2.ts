/*
Aufgabe: 3, UNO Events
Name: Veronika Garbero
Matrikel: 256581
Datum: 09.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a2 {
    
// ############################################################
// ############################### Event Listener
// ############################################################
    
    document.addEventListener("DOMContentLoaded", uno);
    
    
// ############################################################
// ############################### Variablen
// ############################################################
    
    interface card {
        cardName: string;
        imageUrl: string;
    }
    
      let allCards: card[] =  [{ cardName: "r0",
                        imageUrl: "UNO_Neu/img/r0.png"},
                      { cardName: "r1",
                        imageUrl: "UNO_Neu/img/r1.png"},
                      { cardName: "r1",
                        imageUrl: "UNO_Neu/img/r1.png"},
                      { cardName: "r2",
                        imageUrl: "UNO_Neu/img/r2.png"},
                      { cardName: "r2",
                        imageUrl: "UNO_Neu/img/r2.png"},
                      { cardName: "r3",
                        imageUrl: "UNO_Neu/img/r3.png"},
                      { cardName: "r3",
                        imageUrl: "UNO_Neu/img/r3.png"},
                      { cardName: "r4",
                        imageUrl: "UNO_Neu/img/r4.png"},
                      { cardName: "r4",
                        imageUrl: "UNO_Neu/img/r4.png"},
                      { cardName: "r5",
                        imageUrl: "UNO_Neu/img/r5.png"},
                      { cardName: "r5",
                        imageUrl: "UNO_Neu/img/r5.png"},
                      { cardName: "r6",
                        imageUrl: "UNO_Neu/img/r6.png"},
                      { cardName: "r6",
                        imageUrl: "UNO_Neu/img/r6.png"},
                      { cardName: "r7",
                        imageUrl: "UNO_Neu/img/r7.png"},
                      { cardName: "r7",
                        imageUrl: "UNO_Neu/img/r7.png"},
                      { cardName: "r8",
                        imageUrl: "UNO_Neu/img/r8.png"},
                      { cardName: "r8",
                        imageUrl: "UNO_Neu/img/r8.png"},
                      { cardName: "r9",
                        imageUrl: "UNO_Neu/img/r9.png"},
                      { cardName: "r9",
                        imageUrl: "UNO_Neu/img/r9.png"},
                      { cardName: "rChange",
                        imageUrl: "UNO_Neu/img/rChange.png"},
                      { cardName: "rChange",
                        imageUrl: "UNO_Neu/img/rChange.png"},
                      { cardName: "rStop",
                        imageUrl: "UNO_Neu/img/rStop.png"},
                      { cardName: "rStop",
                        imageUrl: "UNO_Neu/img/rStop.png"},
                      { cardName: "r+2",
                        imageUrl: "UNO_Neu/img/r+2.png"},
                      { cardName: "r+2",
                        imageUrl: "UNO_Neu/img/r+2.png"},
                      
                      { cardName: "b0",
                        imageUrl: "UNO_Neu/img/b0.png"},
                      { cardName: "b1",
                        imageUrl: "UNO_Neu/img/b1.png"},
                      { cardName: "b1",
                        imageUrl: "UNO_Neu/img/b1.png"},
                      { cardName: "b2",
                        imageUrl: "UNO_Neu/img/b2.png"},
                      { cardName: "b2",
                        imageUrl: "UNO_Neu/img/b2.png"},
                      { cardName: "b3",
                        imageUrl: "UNO_Neu/img/b3.png"},
                      { cardName: "b3",
                        imageUrl: "UNO_Neu/img/b3.png"},
                      { cardName: "b4",
                        imageUrl: "UNO_Neu/img/b4.png"},
                      { cardName: "b4",
                        imageUrl: "UNO_Neu/img/b4.png"},
                      { cardName: "b5",
                        imageUrl: "UNO_Neu/img/b5.png"},
                      { cardName: "b5",
                        imageUrl: "UNO_Neu/img/b5.png"},
                      { cardName: "b6",
                        imageUrl: "UNO_Neu/img/b6.png"},
                      { cardName: "b6",
                        imageUrl: "UNO_Neu/img/b6.png"},
                      { cardName: "b7",
                        imageUrl: "UNO_Neu/img/b7.png"},
                      { cardName: "b7",
                        imageUrl: "UNO_Neu/img/b7.png"},
                      { cardName: "b8",
                        imageUrl: "UNO_Neu/img/b8.png"},
                      { cardName: "b8",
                        imageUrl: "UNO_Neu/img/b8.png"},
                      { cardName: "b9",
                        imageUrl: "UNO_Neu/img/b9.png"},
                      { cardName: "b9",
                        imageUrl: "UNO_Neu/img/b9.png"},
                      { cardName: "bChange",
                        imageUrl: "UNO_Neu/img/bChange.png"},
                      { cardName: "bChange",
                        imageUrl: "UNO_Neu/img/bChange.png"},
                      { cardName: "bStop",
                        imageUrl: "UNO_Neu/img/bStop.png" },
                      { cardName: "bStop",
                        imageUrl: "UNO_Neu/img/bStop.png" },
                      { cardName: "b+2",
                        imageUrl: "UNO_Neu/img/b+2.png" },
                      { cardName: "b+2",
                        imageUrl: "UNO_Neu/img/b+2.png" },
                      
                      { cardName: "g0",
                        imageUrl: "UNO_Neu/img/g0.png" },
                      { cardName: "g1",
                        imageUrl: "UNO_Neu/img/g1.png" },
                      { cardName: "g1",
                        imageUrl: "UNO_Neu/img/g1.png" },
                      { cardName: "g2",
                        imageUrl: "UNO_Neu/img/g2.png" },
                      { cardName: "g2",
                        imageUrl: "UNO_Neu/img/g2.png" },
                      { cardName: "g3",
                        imageUrl: "UNO_Neu/img/g3.png" },
                      { cardName: "g3",
                        imageUrl: "UNO_Neu/img/g3.png" },
                      { cardName: "g4",
                        imageUrl: "UNO_Neu/img/g4.png" },
                      { cardName: "g4",
                        imageUrl: "UNO_Neu/img/g4.png" },
                      { cardName: "g5",
                        imageUrl: "UNO_Neu/img/g5.png" },
                      { cardName: "g5",
                        imageUrl: "UNO_Neu/img/g5.png" },
                      { cardName: "g6",
                        imageUrl: "UNO_Neu/img/g6.png" },
                      { cardName: "g6",
                        imageUrl: "UNO_Neu/img/g6.png" },
                      { cardName: "g7",
                        imageUrl: "UNO_Neu/img/g7.png" },
                      { cardName: "g7",
                        imageUrl: "UNO_Neu/img/g7.png" },
                      { cardName: "g8",
                        imageUrl: "UNO_Neu/img/g8.png" },
                      { cardName: "g8",
                        imageUrl: "UNO_Neu/img/g8.png" },
                      { cardName: "g9",
                        imageUrl: "UNO_Neu/img/g9.png" },
                      { cardName: "g9",
                        imageUrl: "UNO_Neu/img/g9.png" },
                      { cardName: "gChange",
                        imageUrl: "UNO_Neu/img/gChange.png"},
                      { cardName: "gChange",
                        imageUrl: "UNO_Neu/img/gChange.png"},
                      { cardName: "gStop",
                        imageUrl: "UNO_Neu/img/gStop.png" },
                      { cardName: "gStop",
                        imageUrl: "UNO_Neu/img/gStop.png" },
                      { cardName: "g+2",
                        imageUrl: "UNO_Neu/img/g+2.png" },
                      { cardName: "g+2",
                        imageUrl: "UNO_Neu/img/g+2.png" },
                      
                      { cardName: "y0",
                        imageUrl: "UNO_Neu/img/y0.png" },
                      { cardName: "y1",
                        imageUrl: "UNO_Neu/img/y1.png" },
                      { cardName: "y1",
                        imageUrl: "UNO_Neu/img/y1.png" },
                      { cardName: "y2",
                        imageUrl: "UNO_Neu/img/y2.png" },
                      { cardName: "y2",
                        imageUrl: "UNO_Neu/img/y2.png" },
                      { cardName: "y3",
                        imageUrl: "UNO_Neu/img/y3.png" },
                      { cardName: "y3",
                        imageUrl: "UNO_Neu/img/y3.png" },
                      { cardName: "y4",
                        imageUrl: "UNO_Neu/img/y4.png" },
                      { cardName: "y4",
                        imageUrl: "UNO_Neu/img/y4.png" },
                      { cardName: "y5",
                        imageUrl: "UNO_Neu/img/y5.png" },
                      { cardName: "y5",
                        imageUrl: "UNO_Neu/img/y5.png" },
                      { cardName: "y6",
                        imageUrl: "UNO_Neu/img/y6.png" },
                      { cardName: "y6",
                        imageUrl: "UNO_Neu/img/y6.png" },
                      { cardName: "y7",
                        imageUrl: "UNO_Neu/img/y7.png" },
                      { cardName: "y7",
                        imageUrl: "UNO_Neu/img/y7.png" },
                      { cardName: "y8",
                        imageUrl: "UNO_Neu/img/y8.png" },
                      { cardName: "y8",
                        imageUrl: "UNO_Neu/img/y8.png" },
                      { cardName: "y9",
                        imageUrl: "UNO_Neu/img/y9.png" },
                      { cardName: "y9",
                        imageUrl: "UNO_Neu/img/y9.png" },
                      { cardName: "yChange",
                        imageUrl: "UNO_Neu/img/yChange.png" },
                      { cardName: "yChange",
                        imageUrl: "UNO_Neu/img/yChange.png" },
                      { cardName: "yStop",
                        imageUrl: "UNO_Neu/img/yStop.png" },
                      { cardName: "yStop",
                        imageUrl: "UNO_Neu/img/yStop.png" },
                      { cardName: "y+2",
                        imageUrl: "UNO_Neu/img/y+2.png" },
                      { cardName: "y+2",
                        imageUrl: "UNO_Neu/img/y+2.png" },
                      
                      { cardName: "cWish",
                        imageUrl: "UNO_Neu/img/cWish.png" },
                      { cardName: "cWish",
                        imageUrl: "UNO_Neu/img/cWish.png" },
                      { cardName: "cWish",
                        imageUrl: "UNO_Neu/img/cWish.png" },
                      { cardName: "cWish",
                        imageUrl: "UNO_Neu/img/cWish.png" },
                      
                      { cardName: "cWishPlus4",
                        imageUrl: "UNO_Neu/img/cWishPlus4.png" },
                      { cardName: "cWishPlus4",
                        imageUrl: "UNO_Neu/img/cWishPlus4.png" },
                      { cardName: "cWishPlus4",
                        imageUrl: "UNO_Neu/img/cWishPlus4.png" },
                      { cardName: "cWishPlus4",
                        imageUrl: "UNO_Neu/img/cWishPlus4.png" },
                      
                      ];
    
    
    let handCards: card[] = [];
    let stack: card[] = [];
 

// ############################################################
// ############################### User Eingabefenster
// ############################################################
    
    
            let x: number;
            let input: string = prompt("Bitte gebe die Anzahl deiner gewuenschten Karten ein:"); // Eingabefenster für die gewünschte Anzahl an Karten
            x = Number(input);

                function randomCards(x: number) {
                    return Math.floor(Math.random() * Math.floor(x))
                }
    
    
  
    function uno() {
       /* document.getElementById("button").addEventListener("click", sort);*/ // Funktioniert nicht
        document.getElementById("kartendeck").addEventListener("click", add);
        /* document.addEventListener("keydown", addNew); */
        
// ############################################################
// ############################### Handkarten erstellen
// ############################################################
        
     function createCard(_cardName: string, _imageUrl: string, _x: number) {
         
         let card: HTMLImageElement = document.createElement("img");
         card.src = _imageUrl;
    
            for (let i: number = 0; i < x; i++) {
                 
            let randomNumber: number = randomCards(allCards.length);
            displayHand(allCards[randomNumber].cardName, allCards[randomNumber].imageUrl, i);
            let c: card = allCards.splice(randomNumber, 1)[0];
            handCards.push(c)
            continue;
        }
    }
                
         
        function displayHand(_cardName: string, _imageUrl: string, _x: number) {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("desk").appendChild(div);
        div.setAttribute("id", "handkarten" + _x);
        document.getElementById("handkarten" + _x).innerHTML += _imageUrl;
       
    }
        
        
                   
        function add() {
                deleteCards();
                for (let i: number = 0; i < 1; i++) {
                    let randomNumber: number = randomCards(allCards.length);
                    let c: card = allCards.splice(randomNumber, 1)[0];
                    handCards.push(c)
                }
                for (let i: number = 0; i < handCards.length; i++) {
                    console.log(handCards);
                    displayHand(handCards[i].cardName, handCards[i].imageUrl, i);
                }
            }
                
                function deleteCards() {
                let node: HTMLElement = document.getElementById("desk");
                node.innerHTML = "";
            } 
        
 
}
    
    }
     