/*
Aufgabe: Aufgabe 10, Canvas - Animation
Name: Veronika Garbero
Matrikel: 256581
Datum: 10.01.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A10;
(function (A10) {
    window.addEventListener("load", init);
    let kids = [];
    let snow = [];
    let cloud = [];
    let img;
    // Init Funktion, die Himmel, Sonne usw. zeichnet
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A10.crc2 = canvas.getContext("2d");
        console.log(A10.crc2);
        // Himmel
        // Create gradient
        var grd = A10.crc2.createLinearGradient(0, 0, 0, 200);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        A10.crc2.fillStyle = grd;
        A10.crc2.fillRect(0, 0, 300, 480);
        // Sonne
        A10.crc2.beginPath();
        A10.crc2.arc(240, 60, 30, 0, 2 * Math.PI);
        A10.crc2.fillStyle = "#ffd700";
        A10.crc2.fill();
        // Piste
        A10.crc2.beginPath();
        A10.crc2.moveTo(0, 180);
        A10.crc2.lineTo(480, 500);
        A10.crc2.lineTo(480, 600);
        A10.crc2.lineTo(0, 600);
        A10.crc2.lineTo(0, 0);
        A10.crc2.closePath();
        A10.crc2.fillStyle = "#d7e4e5";
        A10.crc2.fill();
        /* 3 Wolken fix + Funktion
        drawCloud(80, 80, "#ffffff");
       // drawCloud(180, 130, "#ffffff");
        drawCloud(160, 40, "#ffffff"); */
        // 2 fixe B�ume + Funktion
        drawTree(50, 240, "#5a924f");
        drawTree(20, 370, "#5a924f");
        //------------- Schleifen
        // 3 Wolken an zuf�lliger Position
        for (let i = 0; i < 3; i++) {
            cloud[i] = new A10.CloudInfo(330 + Math.random() * 130, 30 + Math.random() * 200);
        }
        // 4 B�ume an zuf�lliger Position
        for (let i = 0; i < 8; i++) {
            let x = 120 + Math.random() * 150;
            let y = 300 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
        // 160 Schneeflocken an zuf�lliger Position
        for (let i = 0; i < 160; i++) {
            snow[i] = new A10.SnowInfo(5 + Math.random() * 300, 20 + Math.random() * 480);
        }
        // Kinder !!FEHLER!!, ich wei� nicht wieso nur 1 Kind erscheint obwohl ich 15 eingegeben habe....
        for (let i = 0; i < 15; i++) {
            kids[i] = new A10.KidsInfo(0, 250, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        }
        img = A10.crc2.getImageData(0, 0, 300, 480);
        animate();
    }
    //------------- Funktion 
    // Function drawTree
    function drawTree(x, y, color) {
        A10.crc2.beginPath();
        A10.crc2.moveTo(x, y);
        A10.crc2.lineTo(x + 10, y + 40);
        A10.crc2.lineTo(x - 10, y + 40);
        A10.crc2.closePath();
        A10.crc2.stroke();
        A10.crc2.fillStyle = color;
        A10.crc2.fill();
    }
    //------------ Animation 
    function animate() {
        console.log("animation");
        A10.crc2.putImageData(img, 0, 0);
        // Schneeflocken
        for (let i = 0; i < snow.length; i++) {
            let sn = snow[i];
            sn.moveSnowInfo();
        }
        // Wolke
        for (let i = 0; i < cloud.length; i++) {
            let cl = cloud[i];
            cl.moveCloudInfo();
        }
        // Kinder
        for (let i = 0; i < kids.length; i++) {
            let ki = kids[i];
            ki.moveKidsInfo();
        }
        window.setTimeout(animate, 10);
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=main.js.map