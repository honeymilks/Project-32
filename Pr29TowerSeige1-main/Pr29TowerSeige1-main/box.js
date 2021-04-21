class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
     

    
      rect(0, 0, this.width, this.height);
            push();
            this.Visiblity=this.Visiblity-5;
            tint(255,this.Visiblity)
            
            //do nothing
            image(this.image,this.body.position.x,this.body.position.y,50,50)
            translate(pos.x, pos.y);
            rotate(angle);
          rectMode(CENTER);
            strokeWeight(4)
            stroke("green")
            fill(255);
            pop();
           

    }
  }