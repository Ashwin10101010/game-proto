var canvas;
var player_stillImage, shooter;
var z1, z2, z3, z4, z5, z6;
var database;
var gameState;
var allPlayers;
var shooters = [];

function preload()
{
      player_stillImage = loadImage("normalStance.png");
      shooter = loadImage("shooter.png")
      z1 = loadImage("Z1.png");
      z2 = loadImage("Z2.png");
      z3 = loadImage("z3.png");
      z4 = loadImage("z4.png");
      z5 = loadImage("z5.png");
      z6 = loadImage("z6.png");
      bg_img = loadImage("Background.png");
}

function setup()
{
   canvas = createCanvas(windowWidth, windowHeight);
   database = firebase.database;
   game = new Game();
   game.getState();
   game.start();
}

function draw()
{
  background(bg_img)

if(playerCount === 2)
{
  game.update(1);
}

if(gameState === 1)
{
  game.play();
}

if(gameState === 2)
{
  game.showLeaderBoard();
  game.end();
}

}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}


