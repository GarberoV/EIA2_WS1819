/*
Aufgabe: Aufgabe 11, Canvas - Inheritance
Name: Veronika Garbero
Matrikel: 256581
Datum: 18.01.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


namespace A11 {
    
        export let crc2: CanvasRenderingContext2D;
        window.addEventListener("load", init);
    
        let objects: MovingObjects[] = [];
       
        let n_kids: number = 12;
        let n_snow: number = 160;
        let n_cloud: number = 3;
        let img: ImageData;
    
    
// Init Funktion, die Himmel, Sonne usw. zeichnet
    
function init(): void {
    
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    crc2 = canvas.getContext("2d");
    console.log(crc2);
    
    
    // Himmel
    // Create gradient
    var grd = crc2.createLinearGradient(0, 0, 0, 200);
    grd.addColorStop(0, "#9999ff");
    grd.addColorStop(0.5, "#9966ff");
    grd.addColorStop(1, "#cc99ff");

    crc2.fillStyle = grd;
    crc2.fillRect(0, 0, 300, 480);
    
    // Sonne
    crc2.beginPath();
    crc2.arc(240, 60, 30, 0, 2*Math.PI);
    crc2.fillStyle = "#ffd700";
    crc2.fill();
    
    // Piste
    crc2.beginPath();
    crc2.moveTo(0, 180);
    crc2.lineTo(480, 500);
    crc2.lineTo(480, 600);
    crc2.lineTo(0, 600);
    crc2.lineTo(0, 0);
    crc2.closePath();
    crc2.fillStyle = "#d7e4e5";
    crc2.fill();
    
    
    
    /* 3 Wolken fix + Funktion 
    drawCloud(80, 80, "#ffffff");
   // drawCloud(180, 130, "#ffffff");
    drawCloud(160, 40, "#ffffff"); */
    
    // 2 fixe Bäume + Funktion
    drawTree(50, 240, "#5a924f");
    drawTree(20, 370, "#5a924f");
    
    
    
//------------- Schleifen
    
    
    // 3 Wolken an zufälliger Position
        for (let i: number = 0; i < n_cloud; i++) {
            let cl = new CloudInfo (330 + Math.random() * 130,
                                       30 + Math.random() * 200);
            objects.push(cl);  
           } 
    
    
    // 8 Bäume an zufälliger Position
        for (let i: number = 0; i < 8; i++) {
            let x: number = 120 + Math.random() * 150;
            let y: number = 300 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
    
    
    
    
      // 160 Schneeflocken an zufälliger Position
        for (let i: number = 0; i < n_snow; i++) {
             let sn = new SnowInfo (5 + Math.random() * 300,
                                    20 + Math.random() * 480);
            objects.push(sn);  
           }
    
    
    // Kinder runter 
    
       for (let i: number = 0; i < n_kids; i++) {
            let ki = new KidsInfo (0, 230,
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)");
           objects.push(ki);  
                                         
            }
    
    
    // Kinder hoch
    
   /* for (let i: number = 0; i < n_kids; i++) {
            let kid = new KidsInfo (300, 420,
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        objects.push(kid);  
                                         
            }*/
    

   
    
     img = crc2.getImageData(0, 0, 300, 480);
        

      animate();
    }
    
//------------- Funktion 
   
    
// Function drawTree
    
    function drawTree (x: number, y: number, color: string) :void {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 10, y + 40);
        crc2.lineTo(x - 10, y + 40);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
            
    }
    
    
//------------ Animation 
    

   function animate(): void {
        console.log("animation");
        crc2.putImageData(img, 0, 0);
   
       
       for (let i: number = 0; i < objects.length; i++) {
            let o: MovingObjects = objects[i];
            o.move();
          }
       
        window.setTimeout(animate, 10);
        }
    }


