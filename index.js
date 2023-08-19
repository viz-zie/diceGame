var randomNumber1=Math.floor(Math.random()*6)+1;
var diceimage="dice"+randomNumber1+".png";
var imagesource="images/"+diceimage;

finalimage=document.querySelectorAll("img")[0];
finalimage.setAttribute("src",imagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceimage2="dice"+randomNumber2+".png";
var imagesource2="images/"+diceimage2;

finalimage2=document.querySelectorAll("img")[1];
finalimage2.setAttribute("src",imagesource2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="player 1 won";
}
else if ( randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="player 1 & 2 won";
}
else{
    document.querySelector("h1").innerHTML="player 2 won";
}




