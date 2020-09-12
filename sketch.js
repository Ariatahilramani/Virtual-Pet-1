var dog, happyDog, database,foodS;
var foodStock;
function preload()
{
  dogImg=loadImage("images/dogImg1.png");
  happyDogImg=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(800, 700);
  foodStock=database.ref('Food');
  foodStock.on("value", readStock)
  dog=createSprite(200,200,40,40);
  dog.addImage("dog",dogImg);
  
}


function draw() {  
background(46,139,87);
  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happyDog",happyDogImg);
  }
  text(foodStock,200,200);

}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
})
}