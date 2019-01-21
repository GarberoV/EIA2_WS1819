/*
Aufgabe: Aufgabe 11, Canvas - Inheritance
Name: Veronika Garbero
Matrikel: 256581
Datum: 18.01.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A11;
(function (A11) {
    window.addEventListener("load", init);
    let objects = [];
    let n_kids = 12;
    let n_snow = 160;
    let n_cloud = 3;
    let img;
    // Init Funktion, die Himmel, Sonne usw. zeichnet
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A11.crc2 = canvas.getContext("2d");
        console.log(A11.crc2);
        // Himmel
        // Create gradient
        var grd = A11.crc2.createLinearGradient(0, 0, 0, 200);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        A11.crc2.fillStyle = grd;
        A11.crc2.fillRect(0, 0, 300, 480);
        // Sonne
        A11.crc2.beginPath();
        A11.crc2.arc(240, 60, 30, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "#ffd700";
        A11.crc2.fill();
        // Piste
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 180);
        A11.crc2.lineTo(480, 500);
        A11.crc2.lineTo(480, 600);
        A11.crc2.lineTo(0, 600);
        A11.crc2.lineTo(0, 0);
        A11.crc2.closePath();
        A11.crc2.fillStyle = "#d7e4e5";
        A11.crc2.fill();
        /* 3 Wolken fix + Funktion
        drawCloud(80, 80, "#ffffff");
       // drawCloud(180, 130, "#ffffff");
        drawCloud(160, 40, "#ffffff"); */
        // 2 fixe B�ume + Funktion
        drawTree(50, 240, "#5a924f");
        drawTree(20, 370, "#5a924f");
        //------------- Schleifen
        // 3 Wolken an zuf�lliger Position
        for (let i = 0; i < n_cloud; i++) {
            let cl = new A11.CloudInfo(330 + Math.random() * 130, 30 + Math.random() * 200);
            objects.push(cl);
        }
        // 8 B�ume an zuf�lliger Position
        for (let i = 0; i < 8; i++) {
            let x = 120 + Math.random() * 150;
            let y = 300 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
        // 160 Schneeflocken an zuf�lliger Position
        for (let i = 0; i < n_snow; i++) {
            let sn = new A11.SnowInfo(5 + Math.random() * 300, 20 + Math.random() * 480);
            objects.push(sn);
        }
        // Kinder runter 
        for (let i = 0; i < n_kids; i++) {
            let ki = new A11.KidsInfo(0, 230, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(ki);
        }
        // Kinder hoch
        /* for (let i: number = 0; i < n_kids; i++) {
                 let kid = new KidsInfo (300, 420,
                                               "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                                               "hsl(" + Math.random() * 360 + ", 100%, 50%)");
             objects.push(kid);
                                              
                 }*/
        img = A11.crc2.getImageData(0, 0, 300, 480);
        animate();
    }
    //------------- Funktion 
    // Function drawTree
    function drawTree(x, y, color) {
        A11.crc2.beginPath();
        A11.crc2.moveTo(x, y);
        A11.crc2.lineTo(x + 10, y + 40);
        A11.crc2.lineTo(x - 10, y + 40);
        A11.crc2.closePath();
        A11.crc2.stroke();
        A11.crc2.fillStyle = color;
        A11.crc2.fill();
    }
    //------------ Animation 
    function animate() {
        console.log("animation");
        A11.crc2.putImageData(img, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let o = objects[i];
            o.move();
        }
        window.setTimeout(animate, 10);
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=main2.js.map