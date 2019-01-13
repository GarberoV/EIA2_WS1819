var A10;
(function (A10) {
    class CloudInfo {
        constructor(x, y) {
            this.cloudX = x;
            this.cloudY = y;
        }
        moveCloudInfo() {
            if (this.cloudX > 350) {
                this.cloudX = 0;
            }
            this.cloudX += Math.random();
            this.drawCloudInfo();
        }
        drawCloudInfo() {
            A10.crc2.fillStyle = "#ffffff";
            A10.crc2.beginPath();
            A10.crc2.arc(this.cloudX, this.cloudY, 20, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.beginPath();
            A10.crc2.arc(this.cloudX + 15, this.cloudY + 5, 18, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.beginPath();
            A10.crc2.arc(this.cloudX - 15, this.cloudY + 5, 18, 0, 2 * Math.PI);
            A10.crc2.fill();
        }
    }
    A10.CloudInfo = CloudInfo;
})(A10 || (A10 = {}));
//# sourceMappingURL=clouds.js.map