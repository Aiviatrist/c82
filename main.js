var mouseevent = "";
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="lavender";
width=1;
canvas.addEventListener("mousedown", micedwn);
function micedwn(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseleave", meeep);
function meeep(e){
    mouseevent="mouseLeave";
}
canvas.addEventListener("mouseup", pedro);
function pedro(e){
   mouseevent="mouseUp";
}
canvas.addEventListener("mousemove", hmmm);
function hmmm(e){
   currentx= e.clientX-canvas.offsetLeft;
   currenty= e.clientY-canvas.offsetTop;

   if (mouseevent=="mouseDown"){
   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=width;
   ctx.moveTo(lastX, lastY);
   ctx.lineTo(currentx, currenty);
   ctx.stroke();
   }
   lastX=currentx;
   lastY=currenty;
}

    