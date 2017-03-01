// Flora class
function Flora(x, y) {
  //genotype
  
  
  //phenotype
  this.x = x;
  this.y = y;
  this.r = random(0, 50);
  this.g = random(100, 255);
  this.b = random(0, 50);
  this.a = 255;
  
  this.radius = random(10, 25);
  this.energy = PI*this.radius*this.radius/10;
  this.counter = 100; //frame counter

  this.update = function(){
    this.counter -= 1;
    // every 100 frames energy rises up for some number
    if (this.counter < 0){
      this.counter = 100;
      this.energy += 1 + this.radius/100;
    };
    this.radius = sqrt(this.energy*10/PI);
    
  };

}

Flora.prototype = new Bubble();