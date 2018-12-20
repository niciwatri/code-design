function setup() {
	createCanvas(600, 600);
	background(255);

	angleMode(DEGREES);


}

function draw() {
  	background(255);
	noFill();
	stroke(color(0,0,0));


	var sec = second();
	var min = minute();
	var hr  = hour();

	var xPosSec = map(sec,0,59,0,500); /*Sekunden auf die Breite des Rechtecks umrechnen*/
	xPosSec=xPosSec+50; /* x Abstand vom Rand dazu zählen */


	rect(50,100, 500,400);
	fill(0);
	ellipse(xPosSec, 100, 20,20); /* Die Ellipse wandert der oberen Kante des Rechtecks entlang */


	/*
	Aufgabe: lass eine zweite Ellipse der Höhe des Rechtecks entlang wandern
	Benutze dazu die Minuten. Bei 0 ist sie links oben. Bei 59 links unten.

	 */

    var yPosMin = map(min,0,59,0,400); /*Minuten auf die Breite des Rechtecks umrechnen*/
    yPosMin=yPosMin+10; /* y Abstand vom Rand dazu zählen */



    ellipse(50, yPosMin, 20,20);

}
