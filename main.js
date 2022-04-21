
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(500,240);
    video=createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video,125,90,400,300);
    rect(90, 35, 500, 20);
    rect(107, 420, 432, 20);
    rect(60,82,20,307);
    rect(565,81,20,307);
    stroke(255,165,0);
    fill(255,165,0);

    circle(70,45,75);
    circle(575,45,75);
    ellipse(70, 425, 75, 75);
    ellipse(575,425,75,75);
  
    stroke(50,168,82);
    fill(50,169,82);

    
    
   

}

function take_snapshot(){
    setTimeout(function(){
        save("photo_frame.png");
    },5000)
    
}

