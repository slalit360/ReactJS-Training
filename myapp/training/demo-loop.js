let color=['blue','black','red'];
console.log(color);

for(let i of color) {    // iterating over 
    console.log(i);
}

console.log(color.length);

// destruction 
let [a,b,c] = color;
console.log(a,b,c);

let calc =()=>[90+70, 100*3];
let [r1,r2] = calc();
console.log(r1,r2);

// Spread operator : to expand array
let arr1 = [10,20,30];
let arr2 = [100,200,300, ...arr1, ...arr1];

console.log(arr2)

let add3 =(a,b,c)=>a+b+c
console.log(add3(...arr1))

// hash set or dict
let book ={
    id:1234,
    name:"ReactJS",
    amount:100.00
}

console.log(book);
console.log(book.name);

for(let key in book){
    console.log(key + " --> "+book[key]);
}

//

