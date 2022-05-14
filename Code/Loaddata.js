let table;
let companyMenu;
let canvas
let imageArray = [];
let submitButton;
let youtubeVideo ;
let videoArray = [];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  bg = loadImage('Code/you.jpg')
  table = loadTable('Code/DataFF.csv', 'csv', 'header');

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  background(bg);
  fill(255)
  youtubeVideo  = select('#youtubeVideo');

 youtubeVideo.position(300, 100)

  companyMenu = createSelect();
  companyMenu.option('Select Date')
  submitButton = createButton('Submit');
  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'Images'));
    //grab each of the dates
    let date = table.getString(i, 'Date');

    let time = table.getString(i, 'Time Play');
    let adAppear = table.getString(i, 'Ad Appear');
    let platform= table.getString(i, 'Platform');
    let images= table.getString(i, 'Images');
    let mood = table.getString(i,'Mood');
    videoArray[i] = table.getString(i, 'videoID');


    companyMenu.option(date)
    //print dates on the screen
    // text(date, 50, (i*40)+40)
    // text(company, 150, (i*40)+40)
  }
//print(imageArray)
  //trigger the changeData function when
  //menu is changeData
  //companyMenu.changed();
  submitButton.mousePressed(changeData);
}

function changeData(){
  background(255);
  textSize(30)
  textAlign(CENTER);
  fill (255,0,0)
  stroke(10);
  strokeWeight(5);
  imageMode(CENTER);
  for (let i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value() == table.getString(i, 'Date')){
     image(imageArray[i], windowWidth/2, windowHeight/2, windowWidth, windowHeight)
      text(table.getString(i, 'Time Play'), 1100, 50);
       text(table.getString(i, 'Ad Appear'), 1100, 90);
       text(table.getString(i, 'Platform'), 1100,130);
       text(table.getString(i,'Mood'),1100,170);


        youtubeVideo.attribute('src', 'https://www.youtube.com/embed/' + videoArray[i]);

      // text(table.getString(i, 'location'), windowWidth/2, 130);
      // text(table.getString(i, 'service'), windowWidth/2, 170);
      // text(table.getString(i, 'frequency'), windowWidth/2, 200);
      // for (let j = 0; j < table.getString(i, 'frequency'); j++){
      //   image(imageArray[i], random(windowWidth), random(windowWidth), 30, 30)
      // }
    }
  }

}

function draw(){

}
