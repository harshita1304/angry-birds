class Bird{
    constructor(x,y,width,height)
    {
         var options={
'restitution':0.8, 
'friction':0.1,
'density':1.0   
    }
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
   var pus=this.body.position;
   pus.x=mouseX;
   pus.y=mouseY;
   var angle=this.body.angle;
   push();
   translate(pus.x,pus.y);
   rotate(angle);
   ellipseMode(CENTER);
   fill("yellow");
   ellipse(pus.x,pus.y,this.width,this.height);
   pop();
}
};