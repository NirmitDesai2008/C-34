class Coach{
    constructor(x,y,width,height){
      var options = { 
        isStatic: false
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/coach.png");
      World.add(world, this.body);
      Matter.Body.setMass(this.body,this.body.mass*5);
    }
  
    show(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}