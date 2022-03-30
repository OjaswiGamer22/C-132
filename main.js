st="";

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd", ModelLoaded);
document.getElementById("heading").innerHTML="Status:  Detecting Objects";
}
function ModelLoaded(){
st=true;
console.log("Model Loaded");
objectdetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
image(img,0,0,640,420);
fill("red");
text("Dog", 80,70);
noFill();
stroke("red");
rect(50,50,270,300);

fill("red");
text("Cat", 350,130);
noFill();
stroke("red");
rect(300,80,330,390);
}