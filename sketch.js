var a = [5329,23,192,1];

function setup() 
{
  createCanvas(400,400);
  avg();
}

function draw() 
{
background(51);

}

function avg(){
  var sum = a[0] + a[1] + a[2] + a[3];
  var average = sum / a.length;
  console.log(average);
}