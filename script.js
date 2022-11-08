var title = document.getElementById('pageTitle');
var pressButton = document.getElementById('pressButton');
var inputText = document.getElementById('userInput');
var outputText = document.getElementById('resultText');
var image = document.getElementById('img');

var menu = ["tiramisu", "strawberry cheesecake", "steroid-infused chocolate cake", "blueberry pancakes", "cold pizza", "roasted chicken", "eggs and toast", "soup", "beef"];
var rock = ["It doesn't matter what you think!", "*does people's elbow*", "*The Rock has entered the ring*", "If you smellllllllllll what The Rock is cooking!"]


pressButton.addEventListener("click", generate);
pressButton.addEventListener("click", restyle);

function imageShow(){
  image.style.display = "block";
}

function generate(){
 var userMeal = inputText.value;
 if (userMeal == "Yes"){
   outputText.innerHTML = "The Rock says: You'll have " + menu[Math.floor(Math.random()*menu.length)] + ".";
   image.hide();
 }else if (userMeal == "No"){
   outputText.innerHTML = rock[Math.floor(Math.random()*rock.length)];
   image.hide();
 }else
   outputText.innerHTML = "*raises eyebrow*";
   imageShow();
 }


function restyle() {
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  var textColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  outputText.style.color = textColor;

  var randomRed = Math.random()*255-50;
  var randomGreen = Math.random()*255-50;
  var randomBlue = Math.random()*255-50;
  var highlightColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  outputText.style.backgroundColor = highlightColor;

  var changeFontSize= ["small", "medium", "large", "x-large", "xx-large", "100%", "250%", "2cm"];

  outputText.style.fontSize = changeFontSize[Math.floor(Math.random()*changeFontSize.length)];

}
