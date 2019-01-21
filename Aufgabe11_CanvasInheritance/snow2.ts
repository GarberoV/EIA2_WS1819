namespace A11 {
    
    export class SnowInfo extends MovingObjects {
        snowX: number;
        snowY: number;
        
        constructor (_x: number, _y: number) {
            super(_x, _y);
         }
  
        
        move(): void {
            if (this.y > 480) {
                this.y = 0;
                }
            this.y += Math.random();
            this.draw();
            
            }
        
        
        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fill();
         }
    }
}