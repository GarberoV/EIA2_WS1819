/*
Aufgabe: Aufgabe 9, Canvas - Rodelhang
Name: Veronika Garbero
Matrikel: 256581
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A9;
(function (A9) {
    window.addEventListener("load", init);
    let crc2;
    // Init Funktion, die Himmel, Sonne usw. zeichnet
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
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
        crc2.arc(240, 60, 30, 0, 2 * Math.PI);
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
        // 3 Wolken fix + Funktion 
        drawCloud(80, 80, "#ffffff");
        // drawCloud(180, 130, "#ffffff");
        drawCloud(160, 40, "#ffffff");
        // 2 fixe Bäume + Funktion
        drawTree(50, 240, "#5a924f");
        drawTree(20, 370, "#5a924f");
        //------------- Schleifen
        // 3 Wolken an zufälliger Position
        for (let i = 0; i < 3; i++) {
            let x = 100 + Math.random() * 120;
            let y = 80 + Math.random() * 150;
            drawCloud(x, y, "#ffffff");
        }
        // 2 Bäume an zufälliger Position
        for (let i = 0; i < 2; i++) {
            let x = 80 + Math.random() * 100;
            let y = 230 + Math.random() * 110;
            drawTree(x, y, "#5a924f");
        }
        // 2 Bäume an zufälliger Position
        for (let i = 0; i < 2; i++) {
            let x = 120 + Math.random() * 100;
            let y = 300 + Math.random() * 110;
            drawTree(x, y, "#5a924f");
        }
        // 2 Bäume in einer Reihe
        for (let i = 0; i < 2; i++) {
            drawTree(140 + i * 60, 420, "#5a924f");
        }
        // 100 Schneeflocken an zufälliger Position
        for (let i = 0; i < 100; i++) {
            let x = 10 + Math.random() * 400;
            let y = 5 + Math.random() * 480;
            drawSnowflake(x, y, "#ffffff");
        }
        // Kind 1
        for (let i = 0; i < 1; i++) {
            let x = 20;
            let y = 190;
            drawKid1(x, y, "#e60073");
        }
        // Kind 2
        for (let i = 0; i < 1; i++) {
            let x = 160;
            let y = 310;
            drawKid2(x, y, "#3377ff");
        }
        // Kind 3
        for (let i = 0; i < 1; i++) {
            let x = 250;
            let y = 400;
            drawKid3(x, y, "#3377ff");
        }
        // Kind 4
        for (let i = 0; i < 1; i++) {
            let x = 80;
            let y = 350;
            drawKid4(x, y, "#ff751a");
        }
        //------------- Funktionen  
        // Function drawCloud 
        function drawCloud(x, y, color) {
            crc2.beginPath();
            crc2.arc(x, y, 18, 0, 2 * Math.PI);
            crc2.arc(x + 15, y + 5, 15, 0, 2 * Math.PI);
            crc2.arc(x - 15, y + 5, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = color;
            crc2.fill();
        }
        // Function drawTree
        function drawTree(x, y, color) {
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 10, y + 40);
            crc2.lineTo(x - 10, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = color;
            crc2.fill();
        }
        // Function drawSnowflake
        function drawSnowflake(x, y, color) {
            crc2.beginPath();
            crc2.arc(x, y, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = color;
            crc2.fill();
        }
        // Function drawKid1
        function drawKid1(x, y, color) {
            crc2.fillStyle = "#e60073";
            crc2.fillRect(x, y, 5, -18);
            crc2.beginPath();
            crc2.arc(x + 2.5, y - 20, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(x + 19, y + 11, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x - 10, y - 5);
            crc2.lineTo(x + 20, y + 14);
            crc2.stroke();
        }
        // Function drawKid2
        function drawKid2(x, y, color) {
            crc2.fillStyle = "#3377ff";
            crc2.fillRect(x, y, 5, -18);
            crc2.beginPath();
            crc2.arc(x + 2.5, y - 20, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(x + 19, y + 11, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x - 10, y - 5);
            crc2.lineTo(x + 20, y + 14);
            crc2.stroke();
        }
        // Function drawKid3
        function drawKid3(x, y, color) {
            crc2.fillStyle = "#33ff33";
            crc2.fillRect(x, y, 5, -18);
            crc2.beginPath();
            crc2.arc(x + 2.5, y - 20, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(x + 19, y + 11, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x - 10, y - 5);
            crc2.lineTo(x + 20, y + 14);
            crc2.stroke();
        }
        // Function drawKid4
        function drawKid4(x, y, color) {
            crc2.fillStyle = "#ff751a";
            crc2.fillRect(x - 22.5, y - 10, 5, -18);
            crc2.beginPath();
            crc2.arc(x - 20, y - 30, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x - 20, y - 20);
            crc2.lineTo(x + 1, y + 2);
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(x - 10, y - 7, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x - 10, y - 5);
            crc2.lineTo(x + 20, y + 14);
            crc2.stroke();
        }
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=rodelhang.js.map