/*
Aufgabe: Aufgabe 10, Canvas - Animation
Name: Veronika Garbero
Matrikel: 256581
Datum: 10.01.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


namespace A10 {
    
        export let crc2: CanvasRenderingContext2D;
        window.addEventListener("load", init);
       
        let kids: KidsInfo[] = [];
        let snow: SnowInfo[] = [];
        let cloud: CloudInfo[] = [];
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
        for (let i: number = 0; i < 3; i++) {
            cloud[i] = new CloudInfo (330 + Math.random() * 130,
                                       30 + Math.random() * 200);
           } 
    
    
     /* 2 Bäume an zufälliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 80 + Math.random() * 100;
            let y: number = 230 + Math.random() * 110;
            drawTree(x, y, "#5a924f");
        } */
    
    // 2 Bäume an zufälliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 120 + Math.random() * 100;
            let y: number = 300 + Math.random() * 110;
            drawTree(x, y, "#5a924f");
        }
    
    
     // 2 Bäume in einer Reihe
        for (let i: number = 0; i < 2; i++) {
            drawTree(140 + i * 60, 420, "#5a924f");
        }
    
    
      // 160 Schneeflocken an zufälliger Position
        for (let i: number = 0; i < 160; i++) {
             snow[i] = new SnowInfo (5 + Math.random() * 300,
                                    20 + Math.random() * 480);
           }
    
    
    // Kinder
        for (let i: number = 0; i < 15; i++) {
            kids[i] = new KidsInfo (0, 250,
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)");
                                         
            }

   
    
     img = crc2.getImageData(0, 0, 300, 480);
        

      animate();
    }
    
//------------- Funktionen  
    

    
    
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
   
       
       // Schneeflocken
        for (let i: number = 0; i < snow.length; i++) {
            let sn: SnowInfo = snow[i];
            sn.moveSnowInfo();
          }
       
       // Wolke
        for (let i: number = 0; i < cloud.length; i++) {
            let cl: CloudInfo = cloud[i];
            cl.moveCloudInfo();
        }
       
       // Kinder
       for (let i: number = 0; i < kids.length; i++) {
           let ki: KidsInfo = kids[i];
           ki.moveKidsInfo();
         }
       
       
        window.setTimeout(animate, 10);
        }
    }




    
 



