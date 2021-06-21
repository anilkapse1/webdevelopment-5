'use strict';


let textValue;
let count; 
let setAtt
document.querySelector("input").addEventListener("keydown",function(e){
    setAtt = document.querySelector("input");
    textValue = document.querySelector("input").value;
    count = document.querySelector('#cal');
    if(textValue.length<=70){
        console.log("execute");
        count.innerText=textValue.length;
    }else{
        setAtt.setAttribute("maxlength",textValue.length);
    }
    
});


