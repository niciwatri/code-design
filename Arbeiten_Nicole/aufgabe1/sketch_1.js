function setup() {
	createCanvas(500, 500);
	background(255);

	angleMode(DEGREES);


}

function draw() {
  	background(255);
	fill(color(0,0,0));
	stroke(255);
	strokeWeight(5);

	triangle(0, 0, 0, 332, 166, 166);
	quad(0, 332, 166, 166, 166, 332, 0, 500);

	triangle(166, 332, 166, 0, 500, 0);
	triangle(500,0, 500, 332, 166, 332);


	triangle(332, 500, 332, 332, 500, 332);
	triangle(500,332, 500, 500, 332, 500);

	rect(166,332,166,166);




}
