namespace A11 {
    
    export class KidsInfo extends MovingObjects {
        
        headcolor: string;
        bodycolor: string;
        md: boolean;
 
    
    constructor (_x: number, _y: number, _headcolor: string, _bodycolor: string) {
        super(_x, _y);
        this.x = Math.random() * 60 + 15;
        this.y = Math.random() * 60 + 290;
        this.headcolor = _headcolor;
        this.bodycolor = _bodycolor;
       // this.md = true;
       }
        
        
        
       draw(): void {
          crc2.fillStyle = this.bodycolor;
          crc2.fillRect(this.x, this.y, 5, -20);
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.arc(this.x + 2.5, this.y -20, 7, 0, 2 * Math.PI);
          crc2.fill();
          crc2.stroke();
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.moveTo(this.x - 10, this.y - 5);
          crc2.lineTo(this.x + 20, this.y + 9);
          crc2.stroke();
        }
        
 
        
         move(): void {
            if (this.md == true)
                this.moveDown();

            else {
                this.moveUp();
            }
        }
        

        moveDown(): void {
            if (this.x > 220) {
                this.md = false;
               // this.x = 0;
               // this.y = 200;
               
                
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            
            
            
            //Richtung
            this.x += Math.random() * (4);
            this.y += Math.random() * (3);
            
            this.draw();
           
        }
      
    
        moveUp(): void {

            if (this.x < 30) {
                this.md = true;
               // this.x = Math.random() * 100 + 50;
               // this.x = 300;
               // this.y = 450;
                
               
                
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            
            
            
            //Richtung
            this.x -= Math.random() * (4); 
            this.y -= Math.random() * (3);
  
            this.draw();
        }
    }
}

