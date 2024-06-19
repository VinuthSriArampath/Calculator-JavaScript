function calc1(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    lblout=document.getElementById("lblout");
    let add=num1+num2;
    
    lblout.innerHTML=add;
}
function calc2(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    lblout=document.getElementById("lblout");
    let sub=num1-num2;
    
    lblout.innerHTML=sub;
}
function calc3(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    lblout=document.getElementById("lblout");
    
    let mul=num1*num2;
    
    lblout.innerHTML=mul;
}
function calc4(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    lblout=document.getElementById("lblout");
    
    let div=num1/num2;
    lblout.innerHTML=div;
}