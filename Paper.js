class Paper {
    constructor(x, y,) {
      var options = {
          isStaic: false,
           'density':1.2,
          'friction':0.5,
          'restitution':0.3,
          
      }
      
      this.body = Bodies.rectangle(x, y, 50 ,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;


      
      var angle = this.body.angle;
     
      push();
      translate(pos.x, pos.y,);
      rotate(angle);
      rectMode(CENTER);
  
      strokeWeight(3);
  
      stroke("white");
  
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  