var dog, happyDog, database,foodS;
var foodStock;
function preload()
{
  dogImg=loadImage("images/dogImg1.png");
  happyDogImg=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();

  dog=createSprite(200,200,40,40);
  dog.addImage(happyDogImg);
  dog.scale=0.5;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock)
  
  
}


function draw() {  
background(46,139,87);

  
  if(keyWentDown(UP_ARROW)){
    dog.addImage(dogImg);
    writeStock(foodS);
  }
  stroke(10);
  fill("black");
  text("Food Remaining :"+foodS,400,200);
  drawSprites();
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

