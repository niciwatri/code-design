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

	var w = (500);


	triangle(0, 0, 0, w/3*2, w/3, w/3);
	quad(0, w/3*2, w/3, w/3, w/3, w/3*2, 0, w);

	triangle(w/3, w/3*2, w/3, 0, w, 0);
	triangle(w,0, w, w/3*2, w/3, w/3*2);


	triangle(w/3*2, w, w/3*2, w/3*2, w, w/3*2);
	triangle(w,w/3*2, w, w, w/3*2, w);

	rect(w/3,w/3*2,w/3,w/3);




}
