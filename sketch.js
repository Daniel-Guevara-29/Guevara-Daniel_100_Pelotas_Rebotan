function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); 
}

let pelotas = [];
const numPelotas = 100;
let rectangulo;

function crearPelotas() {
  for (let i = 0; i < numPelotas; i++) {
    let x = random(width);
    let y = random(height);
    let diametro = random(10, 50); 
    let velocidad = random(1, 4);
    pelotas.push(new Pelota(x, y, diametro, velocidad));
  }
}

function setupRectangulo() {
  rectangulo = {
    x: 0,
    y: height - 20, 
    ancho: width,
    alto: 20,
  };
}

function draw() {
  background(220);

  if (pelotas.length === 0) {
    crearPelotas();
    setupRectangulo();
  }

  fill(100, 100, 100);
  rect(rectangulo.x, rectangulo.y, rectangulo.ancho, rectangulo.alto);

  for (let pelota of pelotas) {
    pelota.mostrar();
    pelota.mover();
    pelota.rebotar();
  }
}

class Pelota {
  constructor(x, y, diametro, velocidad) {
    this.x = x;
    this.y = y;
    this.diametro = diametro;
    this.velocidad = velocidad;
    this.ySpeed = 0;
  }

  mostrar() {
    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.diametro);
  }

  mover() {
    this.y += this.ySpeed;
    this.ySpeed += 0.2;
  }

  rebotar() {
    if (this.y > height - this.diametro / 2) {
      this.y = height - this.diametro / 2;
      this.ySpeed *= -0.8; 
    }

    if (
      this.x >= rectangulo.x &&
      this.x <= rectangulo.x + rectangulo.ancho &&
      this.y + this.diametro / 2 >= rectangulo.y
    ) {
      
      this.y = rectangulo.y - this.diametro / 2;
      this.ySpeed *= -0.8; 
    }
  }
}

