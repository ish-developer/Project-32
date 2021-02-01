
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var score = 0;
var bg = "sprites/bg1.png";
var backgroundImg;
function preload()
{
	getBackgroundImg();
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	
	pin1 = new Pin(680,300,100,80);
	pin2 = new Pin(650,300,100,80);
	pin3 = new Pin(600,300,100,80);
	g = new Ground(500,350,1000,20);
	ball = new Ball(100, 100, 30);
	sling = new Sling(ball.body, { x: 200, y: 250 })
	Engine.run(engine);
  
}


function draw() {
	if(backgroundImg)
	background(backgroundImg);
  
  
  pin1.display();
  pin2.display();
  pin3.display();
  g.display();
 ball.display();
 sling.display();

 text("Press Space for another chance",100,100);
 text("Score:"+score,200,50);
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
  }
  
  
  function mouseReleased() {
	sling.fly();
  }
  
  function keyPressed() {
	if (keyCode === 32) {
	  sling.attach(ball.body);
	  Matter.Body.setPosition(ball.body,{x:200,y:250});
	}
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

