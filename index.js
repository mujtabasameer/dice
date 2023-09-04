var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceSource1="./images/dice"+randomNumber1+".png";

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceSource2="./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomDiceSource1);
document.querySelector(".img2").setAttribute("src", randomDiceSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 won!"
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent="Player 2 won!"
}

else
{
    document.querySelector("h1").textContent="Draw!"
}