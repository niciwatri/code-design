function setup() {
	createCanvas(600, 600);
	background(255);

	angleMode(DEGREES);


}

function draw() {
  	background(255);

  	fill(0);
	rect(100,100, 100,200);

	push();

	translate(150,200)
	rotate(-40);
	translate(-150,-200)
	fill(255,0,0);

	ellipse(0,0, 5,5)
	rect(100,100, 100,200);

	pop();
	
	fill(0, 255, 0);
	rect(200,400, 100,200);
}
