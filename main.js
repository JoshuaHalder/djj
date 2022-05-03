song1="";
song2="";
LeftwristX=0;
LeftwristY=0;
RightwristX=0;
RightwristY=0;
scoreleftwrist=0;
songleft="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded());
    posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,500);
    fill("red");
    stroke("blue");
    if(scoreleftwrist > 0.2){
    song1.isPlaying();
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}


function modelLoaded(){
    console.log("model is initialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
LeftwristX=results[0].pose.leftWrist.x;
LeftwristY=results[0].pose.leftWrist.y;
console.log(LeftwristY,LeftwristX);
scoreleftwrist=results[0].pose.keypoints[9].score;

console.log(results);
RightwristX=results[0].pose.rightWrist.x;
RightwristY=results[0].pose.rightWrist.y;
console.log(RightwristY,RightwristX);
}
}