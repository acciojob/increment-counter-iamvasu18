//your JS code here. If required.
let count=0;
let display=document.getElementById("counter");
let button=document.getElementById("incrementBtn");
button.onclick=()=>{
count++;
display.innerText=count;
}