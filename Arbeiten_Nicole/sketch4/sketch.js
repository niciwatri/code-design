var angle=0;

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);


}

function draw() {


	background(0,0,0,10);
	noFill();
	stroke(255);

	push();
	translate(width/2,height/2);
	rotate(angle);
	ellipse(200,0,100,100);
	pop();


	push();
	fill(255);
	translate(width/2, height/2);
	rotate(angle);
	rectMode(CENTER);
	rect(0,0,200,200);
	pop();
	/*
	   rotiere ein Quadrat von 200*200 um sich selber
	   Rotationsmittelpunkt in der Mitte des Sketches
	   Rotationswinkel gleich wie beim kleinen Kreis (angle)
	   Befolge dafür diese Schritte analog zu oben
	   1. push
	   2. translate
	   3. rotate
	   4. zeichnen
	   5. pop

	  */


	angle=angle+1;
}
