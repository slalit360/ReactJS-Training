// function calling
function add(a,b){
    return a+b;
}

let rs=add(2, 4);
console.log("Result : "+rs);


var add1 = function(c,d){
 return c+d;
}

console.log(add1(3,5));

// function as lambda exp

let get = () => console.log("Hello get !!");
get();

let add2 =(a=10,b=10) => a+b;  // no need of return keyword. b=10 default parameter

console.log("Result : "+add2(100,200));
console.log("Result : "+add2(100));
console.log("Result : "+add2(b=100));
