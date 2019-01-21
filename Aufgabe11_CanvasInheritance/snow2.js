var A11;
(function (A11) {
    class SnowInfo extends A11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 480) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        }
        draw() {
            A11.crc2.fillStyle = "#ffffff";
            A11.crc2.beginPath();
            A11.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            A11.crc2.fill();
        }
    }
    A11.SnowInfo = SnowInfo;
})(A11 || (A11 = {}));
//# sourceMappingURL=snow2.js.map