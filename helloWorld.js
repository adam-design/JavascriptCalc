var x = 5;
var r = 10;
//window.alert("my dick" + r);

function getAJerb()
 {
//    window.alert("Sexy Ricky" + r);
//    var x = window.prompt("What bird is this?");
//    if (x == "HummingBird")
//    {
//        r += 20;
//        document.getElementById("sexy").style.height = r+"px";
//        
//    }
//    else 
//    {
//        window.alert("I is dumbass")
//    }
//    
    
     x = x + 25;
     document.getElementById("sexy").style.marginLeft = x+ "px";
 
}

function clickDaBirdie()
{
    document.getElementById("sexy").addEventListener("click", getAJerb);
    
    
}



//for ( ; r < 15 ; r += 1 )
//{
//    window.alert("hello");
//}