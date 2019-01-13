namespace A10 {
    
    export class KidsInfo {
        
        kidsX: number;
        kidsY: number;
        headcolor: string;
        bodycolor: string;
       
 
    
    constructor (_x: number, _y: number, _headcolor: string, _bodycolor: string) {
        this.kidsX = _x;
        this.kidsY = _y;
        this.headcolor = _headcolor;
        this.bodycolor = _bodycolor;
       }
        
        
        
       drawKidsInfo(): void {
          crc2.fillStyle = this.bodycolor;
          crc2.fillRect(this.kidsX, this.kidsY, 5, -20);
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.arc(this.kidsX + 2.5, this.kidsY -20, 7, 0, 2 * Math.PI);
          crc2.fill();
          crc2.stroke();
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.moveTo(this.kidsX - 10, this.kidsY - 5);
          crc2.lineTo(this.kidsX + 20, this.kidsY + 9);
          crc2.stroke();
        }
        

        moveKidsInfo(): void {
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
}