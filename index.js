var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);


var randomdiceImage="dice"+randomNumber1+".png";
var randomImage="images/"+randomdiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);




var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;


var randomdiceImage2="dice"+randomNumber2+".png";
var randomImage2="images/"+randomdiceImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);




//console.log(randomNumber1);
//Alternate Code by me

// document.querySelector("img").getAttribute("src");
// if(randomNumber1==1)
// {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");

// }
// else if(randomNumber1==2)
// {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");

// }
// else if(randomNumber1==3)
// {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");

// }
// else if(randomNumber1==4)
// {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");;

// }
// else if(randomNumber1==5)
// {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");

// }
// else if(randomNumber1==6)
// {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");

// }

// if(randomNumber2==1)
// {
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");

// }
// else if(randomNumber1==2)
// {
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");

// }
// else if(randomNumber1==3)
// {
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");

// }
// else if(randomNumber1==4)
// {
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");;

// }
// else if(randomNumber1==5)
// {
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");

// }
// else if(randomNumber1==6)
// {
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");

// }



 if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins🗿";
}
else if(randomNumber1<randomNumber2) 
{
    document.querySelector("h1").innerHTML="Player2 Wins🗿";
}
else{

    document.querySelector("h1").innerHTML="Drawn🎃";
}






