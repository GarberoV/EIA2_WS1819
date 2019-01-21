var A11;
(function (A11) {
    class KidsInfo extends A11.MovingObjects {
        constructor(_x, _y, _headcolor, _bodycolor) {
            super(_x, _y);
            this.x = Math.random() * 60 + 15;
            this.y = Math.random() * 60 + 290;
            this.headcolor = _headcolor;
            this.bodycolor = _bodycolor;
            // this.md = true;
        }
        draw() {
            A11.crc2.fillStyle = this.bodycolor;
            A11.crc2.fillRect(this.x, this.y, 5, -20);
            A11.crc2.fillStyle = this.headcolor;
            A11.crc2.beginPath();
            A11.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.fillStyle = this.headcolor;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 10, this.y - 5);
            A11.crc2.lineTo(this.x + 20, this.y + 9);
            A11.crc2.stroke();
        }
        move() {
            if (this.md == true)
                this.moveDown();
            else {
                this.moveUp();
            }
        }
        moveDown() {
            if (this.x > 220) {
                this.md = false;
                // this.x = 0;
                // this.y = 200;
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            //Richtung
            this.x += Math.random() * (4);
            this.y += Math.random() * (3);
            this.draw();
        }
        moveUp() {
            if (this.x < 30) {
                this.md = true;
                // this.x = Math.random() * 100 + 50;
                // this.x = 300;
                // this.y = 450;
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            //Richtung
            this.x -= Math.random() * (4);
            this.y -= Math.random() * (3);
            this.draw();
        }
    }
    A11.KidsInfo = KidsInfo;
})(A11 || (A11 = {}));
//# sourceMappingURL=kidsDown2.js.map