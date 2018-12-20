function setup() {
	createCanvas(windowWidth, windowHeight);//vollflaechig

}

function draw() {
	var sec = second();
	var min = minute();
	var std 	= hour();
	var mil = millis();


	var c = color(mil*4,  sec*4, min*4); //RGB
	background(c);

	fill(255,sec*4); //RGBA Alpha Deckkraft
	noStroke();//kein Strich

	//von der Mitte her zeichnen, statt von links oben
	// rectMode(CENTER);

	// rect(width/2,height/2,100,100);//width und height sind Variablen, die man abfragen kann

	ellipseMode(CENTER);
	ellipse(width/2,height/2,sec,sec);

}
