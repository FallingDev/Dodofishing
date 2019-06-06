class Fishfood{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 50;
        this.xspeed = 5;
        this.yspeed = 5;
    }
    show(){
        image(fishbait[0],this.x, this.y,this.r,this.r);
    }
    move(){
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    hits(other,fx,fy){
        let d = dist(this.x,this.y,other.x,other.y);
        if(d < this.r + other.r){
            return true; 
        }else{
            return false;

        }
    }
    foodReturn(){
        this.x -= this.xspeed*2;
        this.y -= this.yspeed*2;
    }
}