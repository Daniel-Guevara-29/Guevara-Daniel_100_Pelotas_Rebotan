let pelotas = []; 
const NP = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NP; i++) {
    let pelota = new Pelota();
    pelotas.push(pelota);
  }
}

function draw() {
  background(163, 99, 252);
  for (let i = 0; i < NP; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}

class Pelota {
  constructor() {
    this.x = random(width);
    this.y = random(height * 0.2, height * 0.9);
    this.diametro = random(10, 50);
    this.velocidadY = random(1, 5);
    this.gravedad = random(0.2, 1);
  }

  update(piso) {
    this.velocidadY += this.gravedad;
    this.y += this.velocidadY;

    if (this.y >= piso - this.diametro / 2) {
      this.velocidadY *= -1;
      this.y = piso - this.diametro / 2;
    }
  }

  display() {
    fill(255);
    noStroke();
    circle(this.x, this.y, this.diametro);
  }
}


