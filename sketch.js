function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	angleMode(DEGREES);

	colorMode(HSL,360,100,100);
	/*die Farbe wird nun im Hue, Saturation, Lightness Modus definiert
	 https://en.wikipedia.org/wiki/HSL_and_HSV
     Hue von 0-360
     Saturation von 0-100
     Lightness von 0-100

     Vorteil: man hat einen kontinuierlichen Farbkreis
	*/
}

function draw() {

	var sec = second();
	var min = minute();
	var hr  = hour();
	 
	var secS = map (sec, 0, 59, 15, 85);
	var minL = map (min, 0, 59, 10, 90);
	var hrH = map (hr, 0, 23, 1, 358);


  	// var c = color(15*hr, 100, 50);
  	var c = color(hrH, minL, secS);
	background(c);

	noFill();
	stroke(color(0,0,0));
	strokeWeight(2);

	push();


 	fill(hr*10, 100, 50);
 	noStroke();
 	ellipse(width/2, height/2, height, height);

	//Kreis
	noFill();
	stroke(0);
	strokeWeight(2);


	translate(width/2, height/2);
	rotate(-90);
  	translate(-width/2,-height/2);	

  	for (var r = 0; r < min+1; r = r+1) {

  	var durchmesser = map(r,0,59,0,height);//auf die Breite des grossen Kreises mappen
  	ellipse(width/2, height/2, durchmesser, durchmesser);


}

	translate(width/2, height/2);
	rotate(6*sec); //6 * 60sec rotieren = 360Grad
	translate(-width/2,-height/2);


	// Kreis pro Sekunde
	// fill(hr,100,60);
	fill(c)
	noStroke();
	var abstand = map(min,0,59,1,height/2);//Hier analog zu Durchmesser. Wir brauchen hier aber die Hälfte.
	ellipse(width/2+abstand+2, height/2+2, 18, 18);


	
}
