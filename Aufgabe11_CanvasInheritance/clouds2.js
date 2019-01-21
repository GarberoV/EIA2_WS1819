var A11;
(function (A11) {
    class CloudInfo extends A11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x > 350) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        }
        draw() {
            A11.crc2.fillStyle = "#ffffff";
            A11.crc2.beginPath();
            A11.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A11.crc2.fill();
            A11.crc2.beginPath();
            A11.crc2.arc(this.x + 15, this.y + 5, 18, 0, 2 * Math.PI);
            A11.crc2.fill();
            A11.crc2.beginPath();
            A11.crc2.arc(this.x - 15, this.y + 5, 18, 0, 2 * Math.PI);
            A11.crc2.fill();
        }
    }
    A11.CloudInfo = CloudInfo;
})(A11 || (A11 = {}));
//# sourceMappingURL=clouds2.js.map