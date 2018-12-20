var angle1=0;
var rotation1=0;
var angle2=0;
var rotation2=0;

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);


}

function draw() {

	rotation1=map(mouseX,0, width, 0, 5);
	rotation2=map(mouseY,0, width, 0, 5);


	background(0,0,0,10);
	noFill();
	stroke(255);

	push();
	translate(width/2,height/2);
	rotate(angle1);
	ellipse(200,0,100,100);
	pop();

	angle1=angle1+rotation1;



	push();
    translate(width/2,height/2);
    rotate(angle2);
    ellipse(100,0,100,100);
    pop();

    angle2=angle2+rotation2;
}
