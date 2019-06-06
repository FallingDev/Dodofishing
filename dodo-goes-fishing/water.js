class Water{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    show(){
        fill(38, 116, 242,50);
        rect(this.x,this.y,this.w,this.h);
    }
}