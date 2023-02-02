status = "";
object = [];


function preload(){
    img = loadImage("2.jpg")
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
        object = results;
    }
}

function draw(){
    image(img, 0, 0, 640, 420);

    if (status != ""){
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status") = "Object status detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].length, objects[i].width);

        }
    }
}

function back(){
    window.location.href = "index.html";
}