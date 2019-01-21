namespace A11 {
    
   export class MovingObjects {
        x: number;
        y: number;
        md: boolean;
       
       
       constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            }
        
        draw(): void { }
       
        move(): void {
            this.x += Math.random() * 200;
            this.y += Math.random() * 200;
            }
       
        moveDown(): void { }

        moveUp(): void { }
        
        }
    }