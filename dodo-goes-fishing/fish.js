class Fish{
   constructor(x,y){
       this.x = x;
       this.y = y;
       this.r = 50;
       this.xspeed = random(-1,1); 
   }
   show(){
      image(fishimgs[0],this.x,this.y,this.r,this.r);
   }
   move(){
       this.x += this.xspeed;
       this.y += random(-1,1);
   }
}