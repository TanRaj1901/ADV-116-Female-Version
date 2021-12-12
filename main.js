x=0;
y=0;

function preload(){
    lipstick = loadImage("https://i.postimg.cc/jdxPw6nz/l1.png");
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized!');
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        console.log("nose x= " + x);
        console.log("nose y= " + y);
    }
}

function draw(){
    image(video , 0, 0 ,300 ,300);
    image(lipstick , x-25 , y+8 , 30 ,20);
}

function takeSnapshot() {
    save("image.png");
}