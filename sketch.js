function setup() {
 createCanvas(windowWidth, windowHeight); 
  noStroke(); // Sin contorno en las pelotas
}
let pelotas = [];


const numPelotas = 100;


function crearPelotas() {
  for (let i = 0; i < numPelotas; i++) {
    let x = random(width); // Posición inicial en X
    let y = random(height); // Posición inicial en Y
    let diametro = random(20, 40); // Tamaño de la pelota
    let velocidad = random(1, 4); // Velocidad de la pelota

    
    pelotas.push(new Pelota(x, y, diametro, velocidad));
  }
}

function draw() {
  background(220); 

  
  if (pelotas.length === 0) {
    crearPelotas();
  }

  
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
  }
}
