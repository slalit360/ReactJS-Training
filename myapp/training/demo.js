
// variables

var a=10; // global 
if (true){
    b=20; // without var global variable
    a=30;  // default global variable
    var c=50; // local variable 
}
console.log(b);
console.log(a);


function f1(){
    var d= 100;
    a=110;
    e=150;
}
f1()
console.log(a);
console.log(e);

// let variable

var num1 = 100;

if (true){
    let num2=150; // let and var are same except let is block scoped
    num1=50;
}
console.log(num1);
//console.log(num2);

function f1(){
    var d= 100; // local scope
    a=110; // global scope
    let e=150; // block scope
}
f1();
console.log(a);
console.log(d);

// constant  variable

let a= 100;
var b=150;
const c=200;
function f2(){
    a=1000;
    c=2000; // TypeError: Assignment to constant variable.
}
f2();
console.log(a);
console.log(b);
console.log(c);
