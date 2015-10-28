function calcMultiply(button) {
            
    
            document.getElementById("a").value += button.innerHTML;
            document.getElementById("a").focus();
            
           /* states that if an operator button is pressed set push to true*/
           /*var push = false;
           if ($(this).has(".operatorButtons") == true){
               var push = true
               document.getElementById("a").value += button.innerHTML;
               document.getElementById("a").focus();}
//            Adds the operator/number value to the textbox when paired with onClick
            Refocuses to textbox after click 
            
       else
                var push = false; */
}
        
        
       

        
    
        function EnterKeylistener(){
           //be careful with the parentheses here... they can get confusing
           // this .addEventListener is fired when any key is pressed (enter in this case)
            document.getElementById("a").addEventListener("keypress", function (e) {
                var key = e.which || e.keyCode;
                if (key === 13) { // 13 is enter
                    SimpleStuff();
                }
            });
        
        }
        function SimpleStuff(){
           document.getElementById("a").value = eval(document.getElementById("a").value);
        }
        
        function mathLog()
        {
            
            var operation = Math.log;
            document.getElementById("a").value = eval(Math.log(document.getElementById("a").value));
        }
        
        function mathFloor()
        {
            var operation = Math.floor;
            document.getElementById("a").value = eval(Math.floor(document.getElementById("a").value));

            
        }