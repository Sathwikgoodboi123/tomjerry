var cat, catImage;
var mouse, mouseImage;
var bg,bgImage;
var together,tom,tom1,tom2,tom3,jerry,jerry1,jerry2;

function preload() {
    //load the images here
    tom1 = loadImage("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadImage("images/cat4.png");
    jerry1 = loadImage("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadImage("images/mouse4.png");
    bgImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600,50,50);
    tom.addImage(tom1);
    tom.scale = 0.2;
    jerry = createSprite(200,600);
    jerry.addImage(jerry1);
    jerry.scale = 0.15;
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width-jerry.width)/2){
       tom.velocityX = 0;
       tom.addImage(tom3);
       tom.x = 300;
       tom.scale = 0.2;
       jerry.addImage(jerry3);
       jerry.scale = 0.15
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
       if(keyCode === LEFT_ARROW){
           tom.velocityX = -5;
           tom.addAnimation("tom",tom2);
           jerry.addAnimation("jerry",jerry2);
           jerry.frameDelay = 25;
       }

}
