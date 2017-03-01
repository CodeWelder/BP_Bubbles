/*var chars = []; //new array of chars
var flora = []; //new array of flora
//var bubble = new Bubble(0, 0);//for prototyp*/ing

/*function setup() {
  createCanvas(800, 600);
  //background(150);
  print("setup function!");*/

  /*//Create chars
  for (var i = 0; i < 5; i++) {
    chars.push(new Char(random(width),random(height)));
    //print((i+1)+" chars created");
  }

  //Create floras
  for (var i = 0; i < 25; i++) {
    flora.push(new Flora(random(width),random(height)));
    //print((i+1)+" floras created");
  }
}*/

function draw() {
  stroke(0);
  fill(0, 0, 0, 0);
  background(150);
  rect(10, 10, width - 20, height - 20);

  
  //draw floras
  for (var i = flora.length-1; i >= 0; i--) {
    flora[i].update();
    flora[i].display();
    if (flora[i].isDead()) {
      flora.splice(i, 1);
    }
  }
  
  //draw chars
  for (var i = chars.length-1; i >= 0; i--) {
    chars[i].update();
    chars[i].move();
    chars[i].display();
    
    //interactions detecting
    for (var j = 0; j < flora.length; j++) {
      if (chars[i].intersects(flora[j])){
        chars[i].interaction("eater");
        flora[j].interaction("food");
      };
    }
    //remove object if is dead
    if (chars[i].isDead()) {
      chars.splice(i, 1);
    }
  }
}

function mousePressed () {
  for (var i = 0; i < chars.length; i++) {
    var d = dist(chars[i].x, chars[i].y, mouseX, mouseY);
    if (d < chars[i].radius) {
        chars[i].x = mouseX;
        chars[i].y = mouseY;
    }
  };
}

function keyPressed() {
  if (keyCode == 32) {
    //save('myCanvas.jpg');
    //print("save my canvas!");
    chars.push(new Char(mouseX, mouseY));
  }
}

function mouseWheel(event) {
  // for every char
  for (var i = 0; i < chars.length; i++) {
    // check mouse touch
    if ((abs(mouseX - chars[i].x) < chars[i].radius) && (abs(mouseY - chars[i].y) < chars[i].radius)) {
      // if touch - change diameter
      chars[i].energy += event.delta / 50;
      //print("it happened!");
    }
  }
}
