namespace A10 {
    
    export class KidsUpInfo {
        
        kidsUpX: number;
        kidsUpY: number;
        headcolor: string;
        bodycolor: string;
       
 
    
    constructor (x: number, y: number, headcolor: string, bodycolor: string) {
        this.kidsUpX = x;
        this.kidsUpY = y;
        this.headcolor = headcolor;
        this.bodycolor = bodycolor;
       }
        
        
        
       drawKidsUpInfo(): void {
          crc2.fillStyle = this.bodycolor;
          crc2.fillRect(this.kidsUpX, this.kidsUpY, 5, -20);
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.arc(this.kidsUpX + 2.5, this.kidsUpY -20, 7, 0, 2 * Math.PI);
          crc2.fill();
          crc2.stroke();
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.moveTo(this.kidsUpX - 10, this.kidsUpY - 5);
          crc2.lineTo(this.kidsUpX + 20, this.kidsUpY + 9);
          crc2.stroke();
        }
        

        moveKidsUpInfo(): void {
            if (this.kidsUpX < -150) {
                this.kidsUpX = Math.random() * 100 + 50;
                this.kidsUpX = 300;
                this.kidsUpY = 450;
                
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            
            
            //Richtung
            this.kidsUpX -= Math.random() * (5); 
            this.kidsUpY -= Math.random() * (3);
            this.drawKidsUpInfo();
           
        }
      }
}