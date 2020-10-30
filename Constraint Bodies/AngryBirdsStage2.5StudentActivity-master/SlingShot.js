class SlingShot{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.05,
        length:10 
    }
    this.pointB=pointB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
    }

 fly(){
     this.sling.bodyA=null;
 }


 display(){
if(this.sling.bodyA){
var pos=this.sling.bodyA.position;
var pos1=this.sling.pointB;
strokeWeight(8);
line(pos.x,pos.y,pos1.x,pos1.y)

}

    }
}