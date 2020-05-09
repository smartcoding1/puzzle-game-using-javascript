let random=Math.floor(Math.random()*9+1);
let randompic=`${random}.jpg`;

for(let i=0;i<=9;i++)
{
document.getElementsByClassName("pic")[i].setAttribute("src",randompic);
random=Math.floor(Math.random()*9+1);
randompic=`${random}.jpg`;
}
