namespace A10 {
    
    export class SnowInfo {
        snowX: number;
        snowY: number;
        
        constructor (x: number, y: number) {
            this.snowX = x;
            this.snowY = y;
         }
  
        
        moveSnowInfo(): void {
            if (this.snowY > 480) {
                this.snowY = 0;
                }
            this.snowY += Math.random();
            this.drawSnowInfo();
            
            }
        
        
        drawSnowInfo(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.snowX, this.snowY, 2, 0, 2 * Math.PI);
            crc2.fill();
         }
    }
}