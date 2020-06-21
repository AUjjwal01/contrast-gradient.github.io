var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var colorbg=document.querySelector(".colorbg");
var colortext=document.querySelector(".colortext");
var cont=document.getElementById("contrast");
//body.style.background="red";

function gradient(){
   body.style.background="linear-gradient(to right, "+ color1.value +","+ color2.value +" )";
   document.getElementById("lcolor").innerHTML=color1.value;
   document.getElementById("rcolor").innerHTML=color2.value;

   body.textContent=body.style.background;

}

function contrast(){
   
   cont.style.background=colorbg.value;
   cont.style.color=colortext.value;
   document.getElementById("clabel").innerHTML=colorbg.value;
   document.getElementById("ctext").innerHTML=colortext.value;
}


color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);
colorbg.addEventListener("input",contrast);
colortext.addEventListener("input",contrast);

