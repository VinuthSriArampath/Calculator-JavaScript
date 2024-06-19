function calc(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let op=document.getElementById("op").value;
    lblout=document.getElementById("lblout");
    switch(op){
        case "+":lblout.innerHTML=num1+num2;
        break;
        case "-":lblout.innerHTML=num1-num2;
        break;
        case "*":lblout.innerHTML=num1*num2;
        break;
        case "/":lblout.innerHTML=num1/num2;
        break;
    }
}
