function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump_mario = loadSound("jump.wav");
	die_mario = loadSound("mariodie.wav");
	gameover = loadSound("gameover.wav");
	coin_mario = loadSound("coin.wav");
	kick_mario = loadSound("kick.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800,400);
	video.parent("gameconsole")

	poseNet = ml5.poseNet(video,modelLoaded());
	poseNet.on("pose",gotPoses);
}

function draw() {
	game()
}



function modelLoaded(){
	console.log("modelLoaded")
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		console.log( "Nose x" + results[0].pose.nose.x);
		noseY  = results[0].pose.nose.y;
		console.log( "Nose Y" + results[0].pose.nose.y);
	}
}