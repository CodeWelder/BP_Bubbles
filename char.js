// Char class
function Char(x, y) {
  //genotype
  
  //phenotype
  //this.x = x;
  /*this.y = y;
  this.r = random(255);
  this.g = random(255);*/
  //this.b = random(255);
  //this.radius = random(5, 25);
  //this.energy = PI*this.radius*this.radius/10;
  //this.counter = 100; //frame counter

  /*this.move = function() {
    if (keyIsDown(LEFT_ARROW))
      this.x -= 50 / this.radius;
    if (keyIsDown(RIGHT_ARROW))
      this.x += 50 / this.radius;
    if (keyIsDown(UP_ARROW))
      this.y -= 50 / this.radius;
    if (keyIsDown(DOWN_ARROW))
      this.y += 50 / this.radius;
  };*/

  
/*  this.update = function(){
    this.counter -= 1;
    // every 100 frames energy down for some number
    if (this.counter < 0){
      this.counter = 100;
      this.energy -= 1 + this.radius/100;
    };
    this.radius = sqrt(this.energy*10/PI);
  };
  
}*/

Char.prototype = new Bubble();