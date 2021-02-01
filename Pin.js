class Pin{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.001,
            'friction':1.2,
            'density':1.0
        }
        this.Visiblity=255; 
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("istockphoto-91394012-612x612.jpg");
        World.add(world, this.body);
        

    }
    display(){
        if(this.body.speed < 1.5){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
           }
           else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
}
    }

    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
}