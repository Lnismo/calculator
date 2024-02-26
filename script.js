const display = document.getElementById("screen");

function addToScreen(input){
     display.value += input;
}

function addSign(input){
    display.value = eval(display.value);
    display.value += input;
}

function addDecimal(){
    display.value += ".";
}

function backspace(){
    display.value = display.value.slice(0, -1)
}

function clearScreen(){
    display.value = "";
}

function response(){
    try{
        display.value = eval(display.value);
    } catch(error){
        display.value = "Error";
    }
}