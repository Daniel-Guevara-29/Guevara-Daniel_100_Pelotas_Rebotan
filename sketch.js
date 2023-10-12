function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  noStroke();
  let gapX = mouseX;
  let gapY = mouseY;
 let anchura = 20; 

  for (let x = 10; x < windowWidth; x += anchura + gapX) {
    for (let y = 10; y < windowHeight; y += anchura + gapY) {
      square(x, y, anchura);
    }
  }
}
