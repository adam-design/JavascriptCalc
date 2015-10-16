// Get all the keys from document
/*var keys = document.querySelectorAll('#calculator span');
document.getElementById("#calculator span").innerHTML = "value to display";
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
(function () {
    'use strict';
    var i;
    for (i = 0; i < keys.length; i += 1) {
        keys[i].onclick = function (e) {
		// Get the input and button values
		    var input = document.querySelector('.screen');
		    var inputVal = input.innerHTML;
            var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		    if (btnVal === 'C') {
			    input.innerHTML = '';
			    decimalAdded = false;
            }
		  
            document.write(inputVal)
        }; ());
        */

document.getElementById("screen").innerHTML = "15";