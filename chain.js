class chain{
    constructor(bodyA,bodyB,offsetx,offsety){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 200
        }
        this.offsetx=offsetx;
        this.offsety=offsety;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        var pointx = pointB.x+this.offsetx;
        var pointy = pointB.y;
        console.log(pointx);
        console.log(pointy);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointx, pointy);
    }
    
} 