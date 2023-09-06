var randomNum1 = Math.floor(Math.random()*6)+1;
var randomNum2 = Math.floor(Math.random()*6)+1;

var myimg1 = "dice-six-faces-" + randomNum1 + ".png";
var myimg2 = "dice-six-faces-" + randomNum2 + ".png";
document.querySelectorAll("img")[0].src = myimg1;
document.querySelectorAll("img")[1].src = myimg2;
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!!";
}
function clickRes(){
    location.reload();
}
document.querySelector("button").addEventListener("click",clickRes);