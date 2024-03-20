img="";
status="";

function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocosd', modelLoaded);

}

function preload()
{
    img=loadImage('dog_cat.jpg');
}

function draw() 
{
    image(img, 0, 0, 640, 420);

    fill(198, 234, 16);
    text("Perro", 45, 75);
    noFill();
    stroke(198, 234, 16);
    rect(36, 60, 450, 350);

    fill(156, 67, 126);
    text("Gato", 290, 75);
    noFill();
    stroke(156, 67, 126);
    rect(290, 60, 450, 350);
}

function modelLoaded()
{
    console.log("Modelo cargado");
    stadus=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
        console.log(results);
}