//dice1-6 images are loaded using random number function

// Dice1

var randomNumber1 = Math.floor(Math.random()*6+1)

var randomImage1 = "images/dice"+randomNumber1+".png"

document.querySelectorAll("img")[0].setAttribute("src", randomImage1)

// Dice2

var randomNumber2 = Math.floor(Math.random()*6+1)

var randomImage2 = "images/dice"+randomNumber2+".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImage2)

// Header winner declare

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

} else{
    document.querySelector("h1").innerHTML = "Draw 😒";
}