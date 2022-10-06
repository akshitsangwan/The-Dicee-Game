let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 == randomNumber2)
{
    document.querySelector(".container h1").innerHTML = "👏Draw👏";
    let audio1=new Audio("sounds/draw.mp3")
    audio1.play();
}
else if (randomNumber1 > randomNumber2)
{
    document.querySelector(".container h1").innerHTML = "🥳You Win🥳";
    let audio2=new Audio("sounds/win1.mp3")
    audio2.play();
}
else
{
    document.querySelector(".container h1").innerHTML = "🎊Bhai Wins🎊";
    let audio3=new Audio("sounds/win2.mp3")
    audio3.play();
}
