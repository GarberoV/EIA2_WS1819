var A10;
(function (A10) {
    class KidsUpInfo {
        constructor(x, y, headcolor, bodycolor) {
            this.kidsUpX = x;
            this.kidsUpY = y;
            this.headcolor = headcolor;
            this.bodycolor = bodycolor;
        }
        drawKidsUpInfo() {
            A10.crc2.fillStyle = this.bodycolor;
            A10.crc2.fillRect(this.kidsUpX, this.kidsUpY, 5, -20);
            A10.crc2.fillStyle = this.headcolor;
            A10.crc2.beginPath();
            A10.crc2.arc(this.kidsUpX + 2.5, this.kidsUpY - 20, 7, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.fillStyle = this.headcolor;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.kidsUpX - 10, this.kidsUpY - 5);
            A10.crc2.lineTo(this.kidsUpX + 20, this.kidsUpY + 9);
            A10.crc2.stroke();
        }
        moveKidsUpInfo() {
            if (this.kidsUpX < -150) {
                this.kidsUpX = Math.random() * 100 + 50;
                this.kidsUpX = 300;
                this.kidsUpY = 450;
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            //Richtung
            this.kidsUpX -= Math.random() * (5);
            this.kidsUpY -= Math.random() * (3);
            this.drawKidsUpInfo();
        }
    }
    A10.KidsUpInfo = KidsUpInfo;
})(A10 || (A10 = {}));
//# sourceMappingURL=kidsUp.js.map