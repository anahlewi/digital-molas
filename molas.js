let x = 0 
let y = 0
let spacing = 20;
let width = 500;
let height = 500;

function preload() {
  setInterval(draw, 30);
}
function setup() {
    var canvas = createCanvas(width, height);
    // var slider = createSlider(0, 1, 0, 0.1);

    canvas.parent('sketch-holder');
    // slider.parent('input-slider');
    // slider.addClass('form-range');

    // TODO: Add slider to change colors
    // TODO: Add slider to change stroke weight
    // TODO: Add slider to change randomization
    // TODO: Add dark mode button
    // slider.size(200);
}

function draw() {
  stroke(random(200, 255), random(100, 200), random(100, 255));
  strokeWeight(3)
  strokeCap(PROJECT);
  strokeJoin(MITER);

  if(random(1) < 0.5){
    line(x, y, x+spacing, y+spacing);
  }else{
    line(x, y+spacing, x +spacing, y);
  }
  x = x + spacing;
  if (x > width){
    x = 0;
    y = y + spacing;
  }
}


gsap.to('#title', {duration: 3, text: "digital molas", delay: 3})
  

