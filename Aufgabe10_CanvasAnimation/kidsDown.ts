namespace A10 {
    
    export class KidsDownInfo {
        
        kidsDownX: number;
        kidsDownY: number;
        headcolor: string;
        bodycolor: string;
       
 
    
    constructor (x: number, y: number, headcolor: string, bodycolor: string) {
        this.kidsDownX = x;
        this.kidsDownY = y;
        this.headcolor = headcolor;
        this.bodycolor = bodycolor;
       }
        
        
        
       drawKidsDownInfo(): void {
          crc2.fillStyle = this.bodycolor;
          crc2.fillRect(this.kidsDownX, this.kidsDownY, 5, -20);
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.arc(this.kidsDownX + 2.5, this.kidsDownY -20, 7, 0, 2 * Math.PI);
          crc2.fill();
          crc2.stroke();
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.moveTo(this.kidsDownX - 10, this.kidsDownY - 5);
          crc2.lineTo(this.kidsDownX + 20, this.kidsDownY + 9);
          crc2.stroke();
        }
        

        moveKidsDownInfo(): void {
            if (this.kidsDownX > 300) {
                this.kidsDownX = 0;
                this.kidsDownY = 200;
                
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            
            
            //Richtung
            this.kidsDownX += Math.random() * (4);
            this.kidsDownY += Math.random() * (3);
            this.drawKidsDownInfo();
           
        }
      }
}