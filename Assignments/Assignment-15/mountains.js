class Mountain{
    constructor(xpos, ypos, graphics){
        this.xpos = xpos;
        this.ypos = ypos;
        this.fx = graphics;
    }

    draw() {
        let gradient = this.fx.createTwoColorGradient(
            this.xpos, this.ypos, this.xpos, this.ypos-250, "#139726", "#1bafdb"
        )

        this.fx.fillTriangle(this.xpos, this.ypos, 500, gradient);
    }
}

class Mountains{
    constructor(graphics){
        let ypos = graphics.dimensions().height*0.8;
        let mountainWidth = Math.ceil(graphics.dimensions().width/8);
        let numberOfMountains = Math.ceil(graphics.dimensions().width/mountainWidth)+1;
        this.elements = [];
        let offset = 0;

        for(let i = 0; i<numberOfMountains; i++){
            offset = (i%2==0)? 100:0;
            this.elements.push(new Mountain(i*mountainWidth, ypos+offset, graphics));
        }
    }

    draw(){
        this.elements.forEach(mountain=>{
            mountain.draw();
        });
    }
}