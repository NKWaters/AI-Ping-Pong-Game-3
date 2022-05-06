function setup() {
    canvas = createCanvas(480, 380)
    canvas.center();
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
   image(video, 0, 0, 480, 380);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log('Hi');
    }
}