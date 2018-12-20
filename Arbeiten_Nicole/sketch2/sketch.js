function setup() {
	createCanvas(500, 500);

	fill(255,255,255);
	stroke(255);

}

function draw() {
	background(0,0,0);

	var mil = millis();

	noStroke();
	rect(10,350,mil,100);

	noStroke();
	ellipse(80, 46, mil, 200);

	stroke(0, 255, 0);
	strokeWeight(5);
	line(130, 120, mil, 750);


}

/*
 Aufgabe:
 Gib analog zu Sekunde den Wert der Minute und der Stunde in je eine weitere Variable.
 Benutze diese Variablen für andere Masse und andere Formen.
 Bsp. Position / Ellipse

 Zusatz: Die Auswirkung der Veränderung ist relativ klein. Wir bewegen uns im Pixelmass, 60 Pixel sind nicht so viel.
 Wir könntest du durch eine mathematische Manipulation den Effekt vergrössern?

 */
