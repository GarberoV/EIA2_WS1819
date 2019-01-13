namespace A10 {
    
    export class CloudInfo {
        cloudX: number;
        cloudY: number;
      
        constructor (x: number, y: number) {
            this.cloudX = x;
            this.cloudY = y;
         }
        
       
        moveCloudInfo(): void {
            if (this.cloudX > 350) {
                this.cloudX = 0;
            }
            this.cloudX += Math.random();
            this.drawCloudInfo();
            }
    
        
        
         drawCloudInfo(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.cloudX, this.cloudY, 20, 0, 2 * Math.PI);
            crc2.fill();
              
            crc2.beginPath();
            crc2.arc(this.cloudX + 15, this.cloudY + 5, 18, 0, 2 * Math.PI);
            crc2.fill();
              
            crc2.beginPath();
            crc2.arc(this.cloudX - 15, this.cloudY + 5, 18, 0, 2 * Math.PI);
            crc2.fill();
              
          }
    
    }
}