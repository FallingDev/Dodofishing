var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
let water;
let dodoimg;
let dodoonboat;
let fish = [];
let fishingrodimg;
let fishingrod;
let fishcaught = 0;
let fishingstring;
let fishfoods = [];
let fishimgs =  [];
let fishsong;
let fishbait = [];
let cash = 0;
let mic;
let sell,useAs;
function preload(){
  dodoimg = loadImage('assets/images/dodoonboat.png');
  fishingrodimg = loadImage('assets/images/fishingrod.png');
  fishimgs[0] = loadImage('assets/images/bluefish.png');
  fishsong = loadSound('assets/sounds/fish.mp3');
  fishbait[0] = loadImage('assets/images/fishbait.png');
}
function setup(){
  createCanvas(1500,1200);
  sell = createButton('Sell Fish');
  sell.position(20,100);
  useAs = createButton('Use fish as bait');
  useAs.position(90,100);
  sell.mousePressed(sellFish);
  mic = new p5.AudioIn();
  mic.start();
  fishsong.setVolume(0.3);
  fishsong.play();
  setInterval(function(){
  fishsong.play();
  },240000);
  water = new Water(0,height/2+100,width,height);
  dodoonboat = new Dodoonboat(height/2-80);
  fishingrod = new Fishingrod();
  angleMode(DEGREES);
  fish.push(new Fish(random(width,width/2),random(height/2+200,height/2+300)));
setInterval(function(){
  let f = new Fish(random(600,width),random(width,height/2+300));
  fish.push(f);
},5000);
}
function sellFish(){
  for(var i = fishcaught; i < 100;i += 20){
  fishcaught = 0;
  cash += i;
  }
}
function draw(){
  background(51);
  let micVol = mic.getLevel();
  if(micVol*5 > 1){
    for(var j = 0;j < fishcaught;j++){
     fish[j].xspeed *= 1.5;
    }
  }
  water.show();
  textSize(35);
  fill(255);
  text(`Fish Caught = ` + `${fishcaught}`,20,30);
  text(`Cash = ` + `${cash}`,300,30);
  textSize(20);
  text("Click to send a fish bait and when you catch a fish hold e to retrieve the fish",20,60);
  text("Loud sounds will make the fish scared and will run away",20,80);
  dodoonboat.show();
  for(var j = 0;j < fish.length;j++){
    fish[j].show();
    fish[j].move();
}
for(var j = 0;j < fish.length;j++){
  for(let i = 0;i < fishfoods.length;i++){  
    if(fishfoods[i].hits(fish[j],fish[j].x,fish[j].y)){

      fish[j].x = fishfoods[i].x;
      fish[j].y = fishfoods[i].y;
    let fishingstring = new Fishingstring(fishfoods[i].x,fishfoods[i].y);
    fishingstring.show(fishingrod.x+150,fishingrod.y);
    if(fish[j].x <= dodoonboat.x || fish[j].y <= dodoonboat.y){
    // fishfoods.splice(i,1);
    fish.splice(j,1);
    fishcaught += 1;
    }
      if(keyIsDown(69)){
    fishfoods[i].foodReturn();
  }
}
  }
}
for(let i = 0;i < fishfoods.length;i++){  
  fishfoods[i].show();
  fishfoods[i].move();

}
  if(keyIsDown(65)){
    dodoonboat.left();
  }
  if(keyIsDown(68)){
    dodoonboat.right();
  }
  fishingrod.show(dodoonboat.x,dodoonboat.y);
}
function mousePressed(){
  if(mouseButton === LEFT){
  fishfoods.push(new Fishfood(fishingrod.x,fishingrod.y));
  }
}
