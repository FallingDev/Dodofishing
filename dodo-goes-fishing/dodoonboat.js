class Dodoonboat{
    constructor(y){
        this.x = 0;
        this.y = y;
        this.w = 200;
        this.h = 200;
        this.angle = 0;
    }
    show(){
    this.x = constrain(this.x,0,width-this.w);
    // rotate(this.angle);
    //     translate(this.x,this.y);
        image(dodoimg,this.x,this.y,this.w,this.h);
    }
    right(){
        this.x += 3;
    }
    left(){
        this.x -= 3;
    }
}