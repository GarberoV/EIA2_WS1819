var A10;
(function (A10) {
    class KidsInfo {
        constructor(_x, _y, _headcolor, _bodycolor) {
            this.kidsX = _x;
            this.kidsY = _y;
            this.headcolor = _headcolor;
            this.bodycolor = _bodycolor;
        }
        drawKidsInfo() {
            A10.crc2.fillStyle = this.bodycolor;
            A10.crc2.fillRect(this.kidsX, this.kidsY, 5, -20);
            A10.crc2.fillStyle = this.headcolor;
            A10.crc2.beginPath();
            A10.crc2.arc(this.kidsX + 2.5, this.kidsY - 20, 7, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.fillStyle = this.headcolor;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.kidsX - 10, this.kidsY - 5);
            A10.crc2.lineTo(this.kidsX + 20, this.kidsY + 9);
            A10.crc2.stroke();
        }
        moveKidsInfo() {
            if (this.kidsX > 300) {
                this.kidsX = 0;
                this.kidsY = 200;
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            if (this.kidsY > 480) {
                this.kidsY = 0;
                this.kidsY = 0;
            }
            this.kidsX += 4;
            this.kidsY += 3;
            this.drawKidsInfo();
        }
    }
    A10.KidsInfo = KidsInfo;
})(A10 || (A10 = {}));
//# sourceMappingURL=kids.js.map