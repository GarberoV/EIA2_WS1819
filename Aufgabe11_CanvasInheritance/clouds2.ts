namespace A11 {
    
    export class CloudInfo extends MovingObjects {
       
      
        constructor (_x: number, _y: number) {
            super(_x, _y);
         }
        
       
        move(): void {
            if (this.x > 350) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
            }
    
        
        
         draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fill();
              
            crc2.beginPath();
            crc2.arc(this.x + 15, this.y + 5, 18, 0, 2 * Math.PI);
            crc2.fill();
              
            crc2.beginPath();
            crc2.arc(this.x - 15, this.y + 5, 18, 0, 2 * Math.PI);
            crc2.fill();
              
          }
    
    }
}