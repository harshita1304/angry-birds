class Box{
         constructor(x,y,width,height)
         {
              var options={
    'restitution':0.08, 
    'friction':0.5,
    'density':1.0   
         }
  this.body=Bodies.rectangle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  World.add(world,this.body);
     }
    display(){
        var pus=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pus.x,pus.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(pus.x,pus.y,this.width,this.height);
        pop();
}
};