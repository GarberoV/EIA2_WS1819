var A10;
(function (A10) {
    class KidsDownInfo {
        constructor(x, y, headcolor, bodycolor) {
            this.kidsDownX = x;
            this.kidsDownY = y;
            this.headcolor = headcolor;
            this.bodycolor = bodycolor;
        }
        drawKidsDownInfo() {
            A10.crc2.fillStyle = this.bodycolor;
            A10.crc2.fillRect(this.kidsDownX, this.kidsDownY, 5, -20);
            A10.crc2.fillStyle = this.headcolor;
            A10.crc2.beginPath();
            A10.crc2.arc(this.kidsDownX + 2.5, this.kidsDownY - 20, 7, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.fillStyle = this.headcolor;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.kidsDownX - 10, this.kidsDownY - 5);
            A10.crc2.lineTo(this.kidsDownX + 20, this.kidsDownY + 9);
            A10.crc2.stroke();
        }
        moveKidsDownInfo() {
            if (this.kidsDownX > 300) {
                this.kidsDownX = 0;
                this.kidsDownY = 200;
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            //Richtung
            this.kidsDownX += Math.random() * (4);
            this.kidsDownY += Math.random() * (3);
            this.drawKidsDownInfo();
        }
    }
    A10.KidsDownInfo = KidsDownInfo;
})(A10 || (A10 = {}));
//# sourceMappingURL=kidsDown.js.map