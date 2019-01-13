var A10;
(function (A10) {
    class SnowInfo {
        constructor(x, y) {
            this.snowX = x;
            this.snowY = y;
        }
        moveSnowInfo() {
            if (this.snowY > 480) {
                this.snowY = 0;
            }
            this.snowY += Math.random();
            this.drawSnowInfo();
        }
        drawSnowInfo() {
            A10.crc2.fillStyle = "#ffffff";
            A10.crc2.beginPath();
            A10.crc2.arc(this.snowX, this.snowY, 3, 0, 2 * Math.PI);
            A10.crc2.fill();
        }
    }
    A10.SnowInfo = SnowInfo;
})(A10 || (A10 = {}));
//# sourceMappingURL=snow.js.map