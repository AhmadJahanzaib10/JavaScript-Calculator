const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = "";
let buttonText = "";
let total;
buttons.forEach((button)=>{
   button.addEventListener("click", (event)=>{
      buttonText = event.target.innerText;
     if(buttonText == "C"){
      screenValue = ""; 
      screen.value = screenValue;
     }
     else if(buttonText == "="){
      total  = eval(screenValue); 
      screen.value = total;
      screenValue = total;
     }
     else{
      screenValue += buttonText;
      screen.value = screenValue;
     }
   });
});