let graphics;
let clouds;
let mountains;
let ball;
let pipes;


window.onload = function (){
    console.log("hello there, im trying to make a game using canvas api");
    graphics = new Graphics("canvas");
    graphics.makeFullScreen();
    clouds = new Clouds(graphics);
    mountains = new Mountains(graphics);
    ball = new Ball(graphics);
    pipes = new Pipes(graphics, ball);
    addEventListener("keydown", keyPressed);    
    this.setInterval(update, 1000/60);
}
window.onresize= function(){
    graphics.makeFullScreen();
}

function update(){
    drawEverything();
    moveEverything();
}

function drawEverything(){
    console.log("draw everything");
    let gradient = graphics.createTwoColorGradient(0, 0, 0, graphics.dimensions().height*0.66, "#4c5c96", "#1bafdb")
    graphics.fillCanvas(gradient);
    clouds.draw();
    mountains.draw();
    pipes.draw();
    ball.draw();
    
}
    
function moveEverything(){
    console.log("move everything");
    ball.move();
    pipes.move();
}

function keyPressed(event){
    if(event.keyCode = 32){
        ball.up();
    }
}


