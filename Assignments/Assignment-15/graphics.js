class Graphics{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.context = canvas.getContext("2d");
    }

    dimensions(){
        return{
            x:0, y:0, width: this.canvas.width, height: this.canvas.height
        };
    }

    fillCanvas(color){
        this.fillRectangle(0, 0, this.canvas.width, this.canvas.height, color);
    }

    makeFullScreen(){
        window.document.body.style.width = "100vw";
        window.document.body.style.height = "100vh";
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fillTriangle(x, y, size, color){
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.moveTo(x, y-size/2);
        this.context.lineTo(x+size/2, y+size/2);
        this.context.lineTo(x-size/2, y+size/2);
        this.context.fill();
    }

    fillRectangle(x,y,width, height,color){
        this.context.fillStyle = color;
        this.context.fillRect(x,y, width, height);
    }

    strokeRectangle(x, y, width, height, color, lineWidth){
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, width, height);
    }

    fillCircle(x, y, radius, color){
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI*2);
        this.context.fill();
    }

    strokeCircle(x, y, radius, endAngle, color, lineWidth){
        this.context.lineWidth =  lineWidth;
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, endAngle);
        this.context.stroke();
    }
    strokeTriangle(x, y, size, color, lineWidth){
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.moveTo(x, y-size/2);
        this.context.lineTo(x+size/2, y+size/2);
        this.context.lineTo(x-size/2, y+size/2);
        this.context.lineTo(x, y-size/2);
        this.context.stroke();
    }
        stroke(p1x, p1y, p2x, p2y, color, lineWidth, pattern){
            this.context.strokeStyle = color;
            this.context.lineWidth = lineWidth;

            if(pattern){
                this.context.setLineDash(pattern);
            }

            this.context.beginPath();
            this.context.moveTo(p1x, p1y);
            this.context.lineTo(p2x, p2y);
            this.context.stroke();
        }

        createTwoColorGradient(p1x, p1y, p2x, p2y, color1, color2){
            let gradient = this.context.createLinearGradient(p1x, p1y, p2x, p2y);
            gradient.addColorStop(0, color1);
            gradient.addColorStop(1, color2);
            return gradient;
        }
}

