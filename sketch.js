var player, enemy1, enemy2, enemy3, enemy4;
function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
     player = createSprite(displayWidth/2,displayHeight/2);
     leftButton = createButton("←");
     rightButton = createButton("→");
     downButton = createButton("↑");
     upButton = createButton("↓");
     upperleft = createButton("↖");
     upperright = createButton("↗");
     lowerleft = createButton("↘");
     lowerright = createButton("↙");
     leftButton.position(displayWidth/35,displayHeight*4/5);
     rightButton.position(displayWidth/15,displayHeight*4/5);
     downButton.position(displayWidth/20,displayHeight*7/8);
     upButton.position(displayWidth/20,displayHeight*2/3);
     upperleft.position(displayWidth/20,displayHeight*3/4);
     upperright.position(displayWidth/20,displayHeight*3/4);
     lowerleft.position(displayWidth/10,displayHeight*3/4);
     lowerright.position(displayWidth/10,displayHeight*3/4);
     gameState = "start";
     
}
function draw(){
    background(0);
    drawSprites();
}