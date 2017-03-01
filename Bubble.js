// Bubble class
function Bubble() {

//phenotype


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

  //checking for intersections
  this.intersects = function(other) {
    if (dist(this.x,this.y, other.x, other.y) < this.radius + other.radius){
      return true;
    } else {
      return false;
    }
  };

  // food and eater interactions
  this.interaction = function (type) {
    if (type == "eater")
    this.energy += 0.1;
    
    if (type == "food")
    this.energy -= 0.1;
  };

  this.isDead = function() {
    if (this.energy < 0) {
      return true;
    } else {
      return false;
    }
  };

  //display an object on the screen
  this.display = function() {
    stroke(0);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);

    //display flora energy
    fill(0);
    textSize(16*this.radius*2/40);// text size auto changes
    text(round(this.energy), this.x, this.y);
  };

}

