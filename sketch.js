let video;
let poseNet;
let pose;
let skeleton;



var firebaseConfig = {
  apiKey: "AIzaSyBd_A-fJYsRZRKn7AZXaOnMf8XMq134pTs",
  authDomain: "poseestimationtherapy.firebaseapp.com",
  databaseURL: "https://poseestimationtherapy.firebaseio.com",
  projectId: "poseestimationtherapy",
  storageBucket: "poseestimationtherapy.appspot.com",
  messagingSenderId: "491980698977",
  appId: "1:491980698977:web:8810b48ab4421379dbc120",
  measurementId: "G-DSXCXXKDZK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function writeUserData(userId, pose) {
  firebase.database().ref('users/' + userId).set(pose);
}



function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  //console.log(poses); 
  if (poses.length > 0) {
    writeUserData("test", poses[0]);
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}





function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0);
  
  if (pose) {
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    fill(255, 0, 0);
    ellipse(pose.nose.x, pose.nose.y, d);
    fill(0, 0, 255);
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);
    
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0,255,0);
      ellipse(x,y,16,16);
    }
    
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(255);
      line(a.position.x, a.position.y,b.position.x,b.position.y);      
    }
    
    
  
  
  
  }
}