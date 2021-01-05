class roof{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body);
    }
    display(){
        fill ("brown");
        rectMode(CENTER);
       rect(this.x,this.y,this.w,this.h);
    }
}