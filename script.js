displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
calculationFinished = false;

function clearDisplay() {
    // Select the calculator's display
    var display = document.getElementById("display");

    // Clear the global variables and the display
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    display.value = displayNum;
}

function numInput(num) {
    // Select the calcultor's display
    var display = document.getElementById("display");

    // Check if the display is empty and the number being pressed is 0
    if ((display.value == "") && num == "0") {
        return;
    }

    // Check if a calculationn has finished
    // If it has replace the number in the display (the answer to the calculation with the number
    // that was just pressed and change calculation finished back to false
    else if (calculationFinished == true) {
        display.value = num;
        calculationFinished = false;
    }
    // if neither of these is the case input the numbers as usual
    else {
        display.value += num;
    }
}

function insertDecimal(dec) {
    //Select the calculator's display
    var display = document.getElementById("display");

    // Loop through the current number to make sure there isn't already a decimal
    for (i = 0; i < display.value.length; i++)
        if (display.value.charAt(i) == '.') {
            return;
        }
    // If there isn't a decimal to the end of the displayed number
        display.value +- dec;
}

function setOperation(command) {
    // Select the calculator's display
    var display = document.getElementById("display"),
        displayNum = display.value;
    // eval both the numbers to remove quotes
    // otherwise 4 + 5 will be "4" + "5" which in JS will equal 45
        evalDisplay =  eval(displayNum);
        evalStored = eval(storedNum);

    if (queuedOperation == 0) {
        soredNum = display.value;
    }
    else if (queuedOperation == 1) {
        storedNum = evalStored + evalDisplay;
    }
    else if (queuedOperation == 2) {
        storedNum = evalStored - evalDisplay;
    }
    else if (queuedOperation == 3) {
        storedNum = evalStored * evalDisplay;
    }
    if (command == "add") {
        operation = 1
    }
    else if (command == "subtract") {
        operation = 2
    }
    queuedOperation =  operation;
    display.value = '';
}

function calculate() {
    var display = document.getElementsById("display");
        displayNum = display.value;
    var evalDisplay = eval(displayNum),
        evalStored = eval(storedNum);

    if (operation == 1) {
        displayNum = evalStored + evalDisplay;
    }
    else if (operation == 2) {
        displayNum = evalStored - evalDisplay;
    }
    else if (operation == 3) {
        displayNum = evalStored * evalDisplay;
    }
    display.value = displayNum
    if (operation != 0)
        calculationFinished = true;

    operation = 0;
    queuedOperation = 0;
    displayNum = "";
    storedNum = "";
}