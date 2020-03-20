removeLineBreaks();
missedKeys=[];
document.addEventListener('keydown',(e)=>{
if(e.keyCode == 32 && e.target == document.body) {e.preventDefault();} //Disable Space Scrolling
if(e.keyCode== 16){return 0;} //Disable shift key
if(e.keyCode==13){end();return 0;} // Enter key exiting
var text=document.getElementById('text');
if(text.innerHTML==""){end();return 0;}
pressedBtn=e.key.toUpperCase();
targetLetter=text.innerHTML[0].toUpperCase()
text.innerHTML=text.innerHTML.substring(1);
//Checks for the right button
if (pressedBtn==targetLetter){
	clearKeyboard();
try{document.getElementById(pressedBtn).className="button pressed";}catch{}
}
else{
	missedKeys.push(targetLetter);
	clearKeyboard();
	try{document.getElementById(pressedBtn).className="button mistake";}catch{}
}});
//Clear all pressed and mistaken prints
function clearKeyboard(){
try{document.getElementsByClassName("button pressed")[0].className="button";}catch{};
try{document.getElementsByClassName("button mistake")[0].className="button";}catch{};
}
//End function
function end(){
if(missedKeys.length==0){
	text.innerHTML="I have made no mistakes. I am awesome.";
return 0;}

window.alert(`You have so far made ${missedKeys.length} mistakes`);
text.innerHTML=`Your mistakes so far ${missedKeys.toString()}`;
missedKeys=[];
}
//Remove Line breaks  
function removeLineBreaks(){
	document.getElementById('text').innerHTML = document.getElementById('text').innerHTML.replace(/\n/g, '');
}
//TODO Get most repeated element in array
function mostRepeated(){
}