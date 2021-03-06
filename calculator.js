var lastPressedOperator = false;

function clearTextbox() {
    document.getElementById("a").value = "";
}

function buttonPressed(button) {

    // isOperator is true when the button has class op (is an operator)
    var isOperator = $(button).hasClass("op");

    //  When isOperator is false, lastPressedOperator is false
    if (isOperator == false) {
        lastPressedOperator = false;
    }

    // When an operator is pressed the first time or any non-operator it gets added into the calculator box
    if (lastPressedOperator == false) {
        document.getElementById("a").value += button.innerHTML;
        document.getElementById("a").focus();
    }

    if (lastPressedOperator == true) {
        alert("Error: There has to be a number between operators");
    }

    // When an operator is pressed it cannot be pressed again because of the boolean
    if (isOperator == true) {
        console.log("0");
        lastPressedOperator = true;
    }


    //    sets all operators to not be pressed twice in a row
    /* states that if an operator button is pressed set push to true*/

}



/* Meant to prevent division by zero

function zeroDivision(button) {
    var isZero = $(button).hasClass("zero");
    var divideBy = $(button).hasClass("division");

    if (divideBy == true) {
        isZero = true;
    }
    if (isZero == true && divideBy == true) {
        console.log("0");
        alert("You can't divide by zero silly");
    }
}*/








window.onload = EnterKeylistener;

function EnterKeylistener() {
    //be careful with the parentheses here... they can get confusing
    // this .addEventListener is fired when any key is pressed (enter in this case)
    document.getElementById("a").addEventListener("keypress", function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            SimpleStuff();
        }
    });

}

function SimpleStuff() {
    document.getElementById("a").value = eval(document.getElementById("a").value);
}

function mathLog() {

    var operation = Math.log;
    document.getElementById("a").value = eval(Math.log(document.getElementById("a").value));
}

function mathFloor() {
    var operation = Math.floor;
    document.getElementById("a").value = eval(Math.floor(document.getElementById("a").value));
}