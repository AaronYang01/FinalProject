var Button;
let gi;
let tft;
let chess;
let temple;
let sekai;
let geo;
let mineCraft;
let fruit;
let wordle;

fuction preload
  tft = loadImage('pengu.png');
  chess = loadImage('chess.png');
  fruit = loadImage('fruit.png')
  gi= loadImage('Genshin.png');
  temple= loadImage('temple.png')
  sekai= loadImage('sekai.png')
  mineCraft= loadImage('mineCraft.png')
  geo= loadImage('geo.PNG')
  wordle= loadImage('wordle.png')




function setup() {
  createCanvas(400, 400);

  Button = new Clickable();
  Button.locate(20, 20);
  Button.width = 20;
  Button.height = 20;
  Button.cornerRadius = 10;

  function draw() {
  background(220);
  Button.draw();
