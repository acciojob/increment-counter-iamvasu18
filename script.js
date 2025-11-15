//your JS code here. If required.
let para=document.getElementById("counter");
let count=0;
let button=document.getElementById("incrementBtn");
button.addEventListener("click",function(){
	count+=1;
	para.innerText=count;
})
