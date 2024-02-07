var randomNumber = Math.floor(Math.random() * 6) + 1;
var nameRandomNumber = ("./images/dice"+ randomNumber + ".png");
var change1 = document.querySelector(".img1").setAttribute("src",nameRandomNumber);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var nameRandomNumber2 = ("./images/dice"+ randomNumber2 + ".png");
var change2 = document.querySelector(".img2").setAttribute("src",nameRandomNumber2);

var nameV = document.querySelector("h1");

if( randomNumber > randomNumber2){
    nameV.innerHTML = "Player 1 Win"
}
else if(randomNumber2 > randomNumber){
  nameV.innerHTML = "Player 2 Win"
}
else if(randomNumber2 === randomNumber){
  nameV.innerHTML = "Draw"
}