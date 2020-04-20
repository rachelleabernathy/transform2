
let x = 0;
let y = 0;
let dim = 50.0;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background('black');
  
  x = x + 0.5;
  if (x > width + dim) {
    x = -dim;
  }

  translate(x, height / 2 - dim / 2);
  fill('white');
  rect(-dim / 2, -dim / 2, dim, dim);

  // faster rects
  translate(x, dim);
  fill('pink');
  rect(-dim / 2, -dim / 2, dim, dim);

  translate(x, dim);
  fill('yellow');
  rect(-dim / 4, -dim / 4, dim, dim);

  translate(x, dim);
  fill('teal');
  rect(-dim / 6, -dim / 6, dim, dim);

  translate(x, dim);
  fill('orange');
  rect(-dim / 1, -dim / 1, dim, dim);
}
