class Ground{
    constructor(x,y,width,height){
         var object_options={
    isStatic:true
  }
  this.body=Bodies.rectangle(x,y,width,height,object_options);
  this.width=width;
  this.height=height;
  World.add(world,this.body);
    }
    display(){
        var pus=this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pus.x,pus.y,this.width,this.height);
    }
};