var bulletGroup;
var bullet;
var handleAnimation = "playerRun"
var enemy,enemyImg

var enemyGroup;
function preload() {
  bgImg = loadImage("bgImage.jpg");
  playerImg = loadAnimation("run/1.png", "run/2.png", "run/3.png")
  bulletImage = loadImage("Bullet.png")
  playerShot = loadAnimation("shot/1.png", "shot/2.png", "shot/3.png", "shot/4.png", "shot/5.png", "shot/6.png", "shot/7.png")
  enemyRun = loadAnimation("Enemy/Run__000.png","Enemy/Run__001.png" ,"Enemy/Run__002.png" ,"Enemy/Run__003.png" ,"Enemy/Run__004.png" ,"Enemy/Run__005.png" ,"Enemy/Run__006.png" ,"Enemy/Run__007.png" ,"Enemy/Run__008.png" ,"Enemy/Run__009.png")
}

function setup() {
  createCanvas(800, 600);
  bg = createSprite(400, 200)
  bg.addImage(bgImg)
  bg.scale = 2.2

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

camera.y =player.y 
  // controls
  // up arrow
  if (keyDown("up")) {
    player.y -= 7
  }
  // down arrow
  if (keyDown("down")) {
    player.y += 7
  }
  // left 
  if (keyDown("left")) {
    player.x -= 7
  }

  // right
  if (keyDown("right")) {
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

function mouseDragged(){
  // handleAnimation = "playerShot"
  player.changeAnimation("playerShot", playerShot)
  bullet = createSprite(player.x + 100, player.y + 20, 10, 10)
  bullet.shapeColor = "black"
  bullet.velocityX = 20
  bullet.scale = 0.03
  bulletGroup.add(bullet)
  bullet.addImage(bulletImage)
}
