status = "";



function preload(){
    img = loadImage("1.jpg")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}



function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function back(){
    window.location.href = "index.html";
}