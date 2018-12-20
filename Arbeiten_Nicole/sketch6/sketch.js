function setup() {
	createCanvas(600, 600);
	background(255);

	angleMode(DEGREES);


}

function draw() {
  	background(255);
	noFill();
	stroke(color(0,0,0));
	strokeWeight(2);

	var sec = second();
	var min = minute();
	var hr  = hour();

	push();



	//Kreis
  	arc(width/2, height/2, 300,300, 0, 360);

	translate(width/2, height/2);
	rotate(10*sec);
	fill(200,0,0);
	ellipse(0,0,5,5);
	translate(-width/2,-height/2);




	//Zeiger Sekunden
	// line(width/2, height/2, width/2+150, height/2) ;
	var radius = sec;

	ellipse(width/2+radius, height/2, 20,20);
	//ich möchte diesen Zeiger nun drehen
	// wie mache ich das?


	
}
