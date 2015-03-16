var img;  // Declare variable 'img'.
var i=0;
function setup() {
  createCanvas(screen.width, screen.height);
  img = loadImage("assets/cat.jpg");  // Load the image
}


function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
    // image(img, 0, height/2, img.width/2, i/2);
    color(red);
  // drawRect();

  copy(img,10,10,30,30,700,300,30,30);
}

function drawRect(){

    fill(0);
  if(mousePressed==true){
    mouseReleased(){
      ellipse(mouseX,mouseY,80,80);
      return false;
    }
  }

}