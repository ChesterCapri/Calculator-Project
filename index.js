
const display = document.querySelector('.display');
const button = document.querySelector('.button');



let justCalculated = false

function getNumber(n) {

  //if justCalculated is true then clear the number display from the previous result.//
  if (justCalculated) {

    if (!isNaN(n) || n === '.') {
      display.value = "";
    }

    
    justCalculated = false;
  }

    //appends the digits to make a larger number//
   display.value += n;
}

function clearDisplay() {
 display.value = "";
}

function calculate() {
    try{
         display.value = eval(display.value) // this program utilizes the built in eval() function to do simple calculations, however this is not recommended in best practices and could lead to serious issues//
         justCalculated = true;
    }
   catch(error){
    display.value = "Syntax Error"
    justCalculated = false;
   }
   

}