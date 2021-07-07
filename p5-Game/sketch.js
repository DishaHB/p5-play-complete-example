var object1,object2, object3, object4 ;
var bat, batImg
var cloud, cloudImg
function preload(){
  batImg = loadImage('bat-removebg-preview.png')
  cloudImg = loadImage('cloud.png')
}

function setup() {
  createCanvas(400,400);
 
  object1 = createSprite(200,75,10,150)
  //object1.debug = 'true'
  object1.shapeColor = 'red'

  object2 = createSprite(300,325,10,150)
  //object2.debug = 'true'
  object2.shapeColor = 'blue'
  
  object1.velocityY =2
  object2.velocityY =-2
  
  
  object3 = createSprite(375,200,50,50)
  //object3.debug = 'true'
  object3.shapeColor = 'green'
  
  edge = createEdgeSprites()
  
  bat = createSprite(10,200)
  bat.scale = 0.2
  bat.addImage('bat', batImg)
  //bat.debug = 'true'
  bat.setCollider("circle", 0, 0,100)
  
  for(i=30; i<400; i=i+150){
    cloud = createSprite(i,20)
    cloud.addImage('cloud', cloudImg)
  }
  
  
}

function draw() {
  //set background color
  background(150);
  
  //console.log(frameCount)
  
  
  if(keyDown('UP_ARROW')){
    bat.velocityY = -2
    bat.velocityX = 0
  }
  
  if(keyDown('DOWN_ARROW')){
    bat.velocityY = 2
    bat.velocityX = 0
  }
  
  if(keyDown('LEFT_ARROW')){
    bat.velocityX = -2
    bat.velocityY = 0
  }
  
  if(keyDown('RIGHT_ARROW')){
    bat.velocityX = 2
    bat.velocityY = 0
  }
  
  if(bat.isTouching(object1) || bat.isTouching(object2)){
    bat.velocityY = 0
    bat.velocityX = 0
    object1.velocityY =0
    object2.velocityY =0
    
    fill('brown')
    textSize(40)
    text("Game Over", 50,100)
  }
  
  if(bat.isTouching(object3)) {
    
    bat.velocityY = 0
    bat.velocityX = 0
    object1.velocityY =0
    object2.velocityY =0
    
    fill('brown')
    textSize(40)
    text("You Win", 50,100)
     
    }
  
  object1.bounceOff(edge)
  object2.bounceOff(edge)
  bat.bounceOff(edge)
  
  drawSprites();
}