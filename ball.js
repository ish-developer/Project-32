class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.2
        }

       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;

        World.add(world, this.body); 
        this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
    }
   display(){
    var pos = this.body.position;
        var angle = this.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        fill("yellow");       
        ellipse(0,0,this.radius,this.radius);
        pop();

        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }

          for(var i=0;i<this.trajectory.length;i++ ){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
}

   }
}

