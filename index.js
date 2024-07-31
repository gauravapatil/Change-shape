let btn=document.querySelectorAll("button");
let shape=document.querySelector("#arrow");
let bg=document.querySelector(".bgcolor");

btn[0].addEventListener("click",ChangeColor);
btn[1].addEventListener("click",ChangeShape);
function genColor(){
    let color=Math.floor(Math.random()*255);
    return color;

}
function ChangeColor(){
    let newColor = `rgb(${genColor()}, ${genColor()}, ${genColor()})`;
    bg.style.backgroundColor = newColor;
}
let arr=["arrow","square","diamond","triangle","star","left-point","right-point"];
function genShape(){
    let res=Math.floor(Math.random()*arr.length);
    return arr[res];
}
function ChangeShape(){
    let ans=genShape();
    shape.id=ans;
}

