song="";
LeftwristX=0;
LeftwristY=0;
RightwristX=0;
RightwristY=0;
Volume=0;
scoreleftwrist=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posnet=ml5.poseNet(video,modelLoaded());
    posnet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,500);
    fill('#FF0000');
    stroke('#FF6347');
    if(scoreleftwrist > 0.2){
    circle(LeftwristX,LeftwristY,15);
    In_Number=Number(LeftwristY);
    No_Decimal=floor(In_Number);
    console.log(No_Decimal);
    Volume=(No_Decimal/1000)*2;
    console.log(Volume);
    document.getElementById("volume").innerHTML="Volume "+Volume;
    song.setVolume(Volume);
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
scoreleftwrist=results[0].pose.keypointsscoreleftwrist=results[0].pose.keypoints[9].score;
console.log(scoreleftwrist);
LeftwristX=results[0].pose.leftWrist.x;
LeftwristY=results[0].pose.leftWrist.y;
console.log(LeftwristY,LeftwristX);

console.log(results);
RightwristX=results[0].pose.rightWrist.x;
RightwristY=results[0].pose.rightWrist.y;
console.log(RightwristY,RightwristX);
}
}