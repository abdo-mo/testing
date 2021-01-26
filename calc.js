myDiv = document.getElementById("time");
function test() {
    "use strict";
    var num1 = document.getElementById("num1"),
    
        num2 = document.getElementById("num2"),
        
        oper = document.getElementById("operation"),
        
        result = document.getElementById("result");
    result.value = eval(num1.value + oper.value + num2.value);
}
function showDate() {
    "use strict";
    var myDiv = document.getElementById("time"),
        myTime = new Date();
    myDiv.innerHTML = myTime;
}
function printTime() {
    "use strict";
    var d = new Date(),
        hours = d.getHours(),
        min = d.getMinutes(),
        seconds = d.getSeconds();
        
    
    myDiv.innerHTML = hours + ":" + min + ":" + seconds;
    
}
setInterval(printTime, 1000);
var myCheck = document.getElementById('check');
myCheck.onclick = function () {
    "use strict";
    myDiv.classList.toggle('hide');
};