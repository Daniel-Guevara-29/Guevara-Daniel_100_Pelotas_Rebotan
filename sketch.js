let pelotas = [];
let cantidadPelotas = 100;
let pelotaEspecialIndex;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  for (let i = 0; i < cantidadPelotas; i++) {
    let posX = random(width);
    let posY = random(height * 0.2, height * 0.9);
    let diam = random(10, 50);
    let velY = random(1, 5);
    let gravedad = random(0.2, 1);
    let pelota = new Pelota(posX, posY, diam, velY, gravedad);
    

    if (i === cantidadPelotas - 1) {
      pelota.especial = true;
      pelotaEspecialIndex = i;
    }
    pelotas.push(pelota);
  }
}


function draw() {
  background(0, 200, 150, 70);

  for (let i = 0; i < pelotas.length; i++) { 
    pelotas[i].actualizar();
    pelotas[i].mostrar();

    if (i === pelotaEspecialIndex) {
      pelotas[i].cambiarColor();  
  
    }
  }

  fill(139, 69, 19);
  noStroke();
  rect(width / 2, windowHeight, width, 100);
}
  


class Pelota {
  constructor(_posX, _posY, _diam, _velY, _gravedad) {
    this.posX = _posX;
    this.posY = _posY;
    this.diam = _diam;
    this.rad = _diam / 2;
    this.velocidadY = _velY;
    this.gravedad = _gravedad; 
    this.especial = false;
    this.color = color(255, 200, 150);
  }

  actualizar() {
    this.velocidadY += this.gravedad;
    this.posY += this.velocidadY;

    if (this.posY >= windowHeight - this.rad - 50) { 
      this.velocidadY *= -1;
      this.posY = windowHeight - this.rad - 50;
    }
  }

  mostrar() {
    fill(this.color);
    noStroke();
    circle(this.posX, this.posY, this.diam);
  }

  cambiarColor() {
    this.color = color(255, 0, 0); 
  }
}

