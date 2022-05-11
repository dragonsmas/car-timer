var backgroundImage, track, trackImgcarImg, car, carImg, canvas;
var fuel, obstacle1, obstacle2, height = 50;
var height = 60;
var finishLine = -3500;
var num_random;
var tt = 0
var score, score1

function preload(){
  // backgroundImage = loadImage("assets\background.png")
  trackImg = loadImage("assets/track.jpg")
   carImg = loadImage("car2.png");
  // fuel = loadImage("assets\fuel.png");
  // obstacle1 = loadImage("assets\obstacle1.png");
 // obstacle2 = loadImage("");
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  car = createSprite(700,600,50,100);
  car.addImage("car", carImg);
  car.scale = 0.1

  camera.position.y = car.position.y;

  num_random = Math.floor(random(800,805));
  console.log(num_random);

  num_random -= 1;
  if(num_random <= 0){
    gameOver();
  }
  if(num_random =>0 && car.position.y == height * 6 - 100){
    gameWon();
  }


  score = createElement("h2");
  score.html(num_random);

  score1 = createElement("h2");
  score1.html("Time:");
  
}

function draw(){
  
  //background(trackImg)
  if(keyDown("up_arrow")){
    car.position.y = car.position.y - 5;
   num_random -= 1;
  }


  if(keyDown("right_arrow") && car.position.x < 1240 / 2 + 250){
    car.position.x = car.position.x + 3;
  }
  if(keyDown("left_arrow")&&  car.position.x > 1240 / 3 - 50){
    car.position.x = car.position.x - 3;

  }
  image(trackImg, 0, -height * 5, width, height * 6);

  camera.position.y = car.position.y;

 
  
  if(car.position.y <= -3500){
    car.velocityY = 0;
    car.position.y = -3300;
    car.position.x = 620;
  }

  //showRank();

  


  drawSprites();


  //console.log(windowWidth);
  //console.log(windowHeight);

  score.position(300,0);
  score1.position(225,0)


  
  //console.log(car.position.y);

}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function showRank() {
  swal({
    title: `Awesome!${"\n"}Rank${"\n"}${car.rank}`,
    text: "You reached the finish line successfully",
    imageUrl:
      "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    imageSize: "100x100",
    confirmButtonText: "Ok"
  });
}

function gameOver(){
  console.log("Game Over!");
}

function gameWon(){
  console.log("You won!")
}

