// console.log("hello");

// let str="15+26";
// const token=str.split(/([+\-*/])/);

// console.log(token);
let display = document.getElementById("display");
let number1=null;
function num7() {
    display.value += "7";
}
function num8() {
    display.value += "8";
}
function num9() {
    display.value += "9";
}
function numadd() {
    display.value+="+";
}

function num4() {
    display.value += "4";
}
function num5() {
    display.value += "5";
}
function num6() {
    display.value += "6";
}
function numsub() {
    display.value += "-";
}

function num1() {
    display.value += "1";
}
function num2() {
    display.value += "2";
}
function num3() {
    display.value += "3";
}
function nummul() {
    display.value += "*";
}

function num0() {
    display.value += "0";
}
function numdot() {
    display.value += ".";
}
function numdiv() {
    display.value += "/";
}

function calc(){
    let expresstionar=display.value.split(/([+\-*/])/);
    console.log(expresstionar);
    for(let i=0;i<expresstionar.length;i++){
        leftnum=Number(expresstionar[i-1]);
        rightnum=Number(expresstionar[i+1]);
        if(expresstionar[i]==="*"){
            display.value=leftnum*rightnum;
            break;
        }else if(expresstionar[i]==="/"){
            display.value=leftnum/rightnum;
            break;
        }else if(expresstionar[i]==="+"){
            display.value=leftnum+rightnum;
            break;
        }else if(expresstionar[i]==="-"){
            display.value=leftnum-rightnum;
            break;
        }
    }
}

function del() {
    let tempstr = display.value;
    tempstr = tempstr.slice(0, -1);
    display.value = tempstr;
}

function clr(){
    display.value=null;
}


