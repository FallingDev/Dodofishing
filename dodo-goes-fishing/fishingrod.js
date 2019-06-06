class Fishingrod{
    constructor(){
        this.w = 70;
        this.h = 200;
        this.angle = 0;
        this.rotationangle = 0;
    }
    backwards(){
        // let rotationangle = constrain(this.rotationangle,0,180);
        this.angle -= 1;
    }
    forwards(){
        // let rotationangle = constrain(this.rotationangle,0,180);
        this.angle += 6;
    }
    show(x,y){
        this.x = x;
        this.y = y;
        translate(this.x + this.w,this.y);
        rotate(this.angle);
        image(fishingrodimg,0,0,this.w,this.h);
    }
}
class Fishingstring{
    constructor(x2,y2){
        this.x2 = x2;
        this.y2 = y2;
    }
    show(x1,y1){
        this.x1 = x1;
        this.y1 = y1;
        fill(0);
        line(this.x1,this.y1,this.x2,this.y2);
    }
}