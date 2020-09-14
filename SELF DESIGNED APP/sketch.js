// Create variables for all the KEYS. For example
var keyA  , keyAS ,keyB ,keyC,keyCS,keyD,keyDS,keyE,keyF,keyFS,keyG,keyGS,  KEYS; 
var piano,piano1;
var soundA,soundAS,soundB,soundC,soundCS,soundD,soundDS,soundE,soundF,soundFS,soundG,soundGS,sounds;
var welcomeImg;
var form;
var nextImg , bg , background;
var view , welcome;
var lImg , liImg , lisImg , music;

const LOGIN = 0;
const WELCOME = 1;
const COMPLETE = 2;
const TARGET_COMPLETE = 3;
var gameState = LOGIN;


function preload(){
  
 /* soundC = loadSound("sounds/piano_middle_C.mp3"); 
  soundD = loadSound("sounds/piano_D.mp3"); 
  soundE = loadSound("sounds/piano_E.mp3"); 
  soundF = loadSound("sounds/piano_F.mp3"); 
  soundG= loadSound("sounds/piano_G.mp3"); 
  soundA = loadSound("sounds/piano_A.mp3"); 
  soundB = loadSound("sounds/piano_B.mp3"); 
  soundCS = loadSound("sounds/piano_C_sharp.mp3"); 
  soundDS = loadSound("sounds/piano_D_sharp.mp3"); 
  soundFS = loadSound("sounds/piano_F_sharp.mp3"); 
  soundGS = loadSound("sounds/piano_G_sharp.mp3"); 
  soundAS = loadSound("sounds/piano_A_sharp.mp3"); */                                            
  welcomeImg = loadImage("images/saraswati.jpg");
  nextImg = loadImage("images/next.jpg");
  logoImg = loadImage("images/appLogoImg.jpg");
  lImg = loadImage("images/mSym.jpg");
  liImg = loadImage("images/eSym.jpg");
  lisImg = loadImage("images/nSym.jpg");  
  
  music = loadImage("images/music.jpg");
  bg = loadImage("images/BG.jpg");
  
}

function setup (){

  createCanvas(displayWidth-50,displayHeight-50);
  form  = new Form;
  form.display();


 
 }

 function draw() {
  
  imageMode(CENTER);
  background = image(bg,displayWidth/2,displayHeight/2,displayWidth,displayHeight);

  if(gameState === LOGIN){
    imageMode(CENTER);
    image(welcomeImg,displayWidth/2-400,displayHeight/2+100,600,500);
   
    // console.log("checking for welcome screen");
    
    image(logoImg,displayWidth/4 - 50, displayHeight/2-250,300,200);
  } 
  
  if (gameState === WELCOME){
      form.hide();
      welcome = new Welcome();
      welcome.display();
  }
 
 
 
 
 
  drawSprites();
 
}

/*
function piano(){
   /*  keyC = createSprite(50,250,50,200);
    keyD = createSprite(100,250,50,200);
    keyE = createSprite(150,250,50,200);
    keyF = createSprite(200,250,50,200);
    keyG = createSprite(250,250,50,200);
    keyA = createSprite(300,250,50,200);
    keyB = createSprite(350,250,50,200);
    piano = createSprite(12.5,250,25,200);
    pianoP = createSprite(200,100,400,100);
    piano1 = createSprite(387.5,250,25,200);
    keyCS = createSprite(75,215,30,130);
    keyDS = createSprite(125,215,30,130);
    keyFS = createSprite(225,215,30,130);
    keyGS = createSprite(275,215,30,130);
    keyAS = createSprite(325,215,30,130);
   C = createSprite(40,326,5,5);
   D = createSprite(100,326,5,5);
   E = createSprite(150,326,5,5);
   F = createSprite(204,326,5,5);
    G = createSprite(250,326,5,5);
   A = createSprite(300,326,5,5);
   B = createSprite(350,326,5,5);
   CS = createSprite(75,260,5,5);
   DS = createSprite(120,260,5,5);
   FS = createSprite(224,260,5,5);
   GS = createSprite(272,260,5,5);
   AS= createSprite(324,260,5,5);
 
   keyC.shapeColor = "white";
   keyD.shapeColor = "beige";
   keyE.shapeColor = "white";
   keyF.shapeColor = "beige";
   keyG.shapeColor = "white";
   keyA.shapeColor = "beige";
   keyB.shapeColor = "white";
   piano.shapeColor = "purple";
   pianoP.shapeColor = "purple";
   piano1.shapeColor = "purple";
   keyCS.shapeColor = "black";
   keyDS.shapeColor = "black";
   keyFS.shapeColor = "black";
   keyGS.shapeColor = "black";
   keyAS.shapeColor = "black";*/
 
 /*C.setAnimation("C.PNG_1");
 C.scale = 0.1;
 D.setAnimation("D.PNG_1");
 D.scale = 0.1;
 E.setAnimation("E.PNG_1");
 E.scale = 0.1;
 F.setAnimation("F.PNG_1");
 F.scale = 0.1;
 G.setAnimation("G.PNG_1");
 G.scale = 0.1;
 A.setAnimation("A.PNG_1");
 A.scale = 0.2;
 B.setAnimation("B.PNG_1");
 B.scale = 0.2;
 CS.setAnimation("C#.PNG");
 DS.setAnimation("D#.PNG_1");
 FS.setAnimation("F#.PNG_1");
 GS.setAnimation("G#.PNG_1");
 AS.setAnimation("A#.PNG_1");*/

 /*if(mousePressedOver(keyC)){
  soundC.play();
}

if(mousePressedOver(keyD)){
  soundC.play();
}

if(mousePressedOver(keyE)){
  soundC.play();
}

if(mousePressedOver(keyF)){
  soundC.play();
}

if(mousePressedOver(keyG)){
  soundC.play();
}

if(mousePressedOver(keyA)){
  soundC.play();
}

if(mousePressedOver(keyB)){
  soundC.play();
}

if(mousePressedOver(keyCS)){
  soundC.play();
}

if(mousePressedOver(keyDS)){
  soundC.play();
}

if(mousePressedOver(keyFS)){
  soundC.play();
}

if(mousePressedOver(keyGS)){
  soundC.play();
}

if(mousePressedOver(keyAS)){
  soundC.play();
}
}
*/