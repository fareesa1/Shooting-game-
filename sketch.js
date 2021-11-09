var bulletGroup;
var bullet;
var handleAnimation = "playerRun"
var enemy,enemyImg;
var leftButton, rightButton, upButton,downButton;

var enemyGroup;
function preload() {
  bgImg = loadImage("bgImage.jpg");
  playerImg = loadAnimation("run/1.png", "run/2.png", "run/3.png")
  bulletImage = loadImage("Bullet.png")
  leftButtonImage = loadImage("left.png")
  rightButtonImage = loadImage("right.png")
  // upButtonImage = loadImage("lb.png")
  // downButtonImage = loadImage("lb.png")

  
  playerShot = loadAnimation("shot/1.png", "shot/2.png", "shot/3.png", "shot/4.png", "shot/5.png", "shot/6.png", "shot/7.png")
  enemyRun = loadAnimation("Enemy/Run__000.png","Enemy/Run__001.png" ,"Enemy/Run__002.png" ,"Enemy/Run__003.png" ,"Enemy/Run__004.png" ,"Enemy/Run__005.png" ,"Enemy/Run__006.png" ,"Enemy/Run__007.png" ,"Enemy/Run__008.png" ,"Enemy/Run__009.png")
}

function setup() {
  createCanvas(800, 600);
  bg = createSprite(400, 200)
  bg.addImage(bgImg)
  bg.scale = 2.2
  

  leftButton = createSprite(700,500)
  leftButton.addImage(leftButtonImage)
  rightButton = createSprite(700,500)
  rightButton.addImage(rightButtonImage)
  rightButton.mirrorX(-1)
  upButton = createSprite(680,500)
  upButton.addImage(leftButtonImage)
  downButton = createSprite(700,500)
  downButton.addImage(leftButtonImage)
  
  leftButton.debug = true
  leftButton.setCollider('circle',-20,-50,50)
  rightButton.setCollider('circle',-20,-50,50)
  upButton.setCollider('circle',-20,-50,50)
  downButton.setCollider('circle',-20,-50,50)
  
  rightButton.scale = 0.3
  leftButton.scale = 0.3
  upButton.scale = 0.3
  downButton.scale = 0.3

  enemyGroup = createGroup();
  ground = createSprite(400, 460, 800, 40)
  ground.shapeColor = "grey"

  player = createSprite(200, 380, 50, 50)
  player.addAnimation("playerRun", playerImg)
  player.addAnimation("playerShot", playerShot)

  // create A ground sprite


  player.scale = 0.35

  bulletGroup = createGroup()
}

// https://opengameart.org/sites/default/files/Soldier-Guy-PNG.zip

function draw() {


  background(255, 255, 255);

// setting up camera
camera.on()
camera.x = player.x 

leftButton.x =player.x+240
rightButton.x =player.x+290
upButton.x =player.x+250
downButton.x =player.x+280

leftButton.y =player.y+30
rightButton.y =player.y+30
upButton.y =player.y-20
downButton.y =player.y+50

upButton.rotation = 90
downButton.rotation = -90

camera.y =player.y 
  // controls
  // up arrow
  if (keyDown("up") || mousePressedOver(upButton)) {
    player.y -= 7
  }
  // down arrow
  if (keyDown("down") || mousePressedOver(downButton) ) {
    player.y += 7
  }
  // left 
  if (keyDown("left") || mousePressedOver(leftButton) ) {
    player.x -= 7
  }

  // right
  if (keyDown("right") || mousePressedOver(rightButton) ) {
    player.x += 7
  }
  // junp

  // destroy enemy
  if (bulletGroup.isTouching(enemyGroup)){
    enemyGroup[0].destroy()
  }
  // player.addAnimation("playerRun", playerImg)

  if (keyDown("enter")) {
    // handleAnimation = "playerShot"
    player.changeAnimation("playerShot", playerShot)
    bullet = createSprite(player.x + 100, player.y + 20, 10, 10)
    bullet.shapeColor = "black"
    bullet.velocityX = 20
    bullet.scale = 0.03
    bulletGroup.add(bullet)
    bullet.addImage(bulletImage)
  }

  // else{
    player.addAnimation(handleAnimation)
  // }

  //  repeat background
  if(player.x-bg.x>200) bg.x=player.x+100;
  if(bg.x-player.x>200) bg.x=player.x-100;
  spawnEnemy()

  drawSprites();
}

function spawnEnemy(){
  
if (frameCount % 50 == 0) {
  enemy = createSprite(player.x + 200, 380, 50, 50)
  enemy.velocityX = -3
  enemy.shapeColor = "orange"
  enemy.addAnimation("enemyRun", enemyRun)
  enemy.scale = 0.3

enemy.mirrorX(-1)

enemyGroup.add(enemy)
} 
}

// function mouseDragged(){
//   // handleAnimation = "playerShot"
//   player.changeAnimation("playerShot", playerShot)
//   bullet = createSprite(player.x + 100, player.y + 20, 10, 10)
//   bullet.shapeColor = "black"
//   bullet.velocityX = 20
//   bullet.scale = 0.03
//   bulletGroup.add(bullet)
//   bullet.addImage(bulletImage)
// }
