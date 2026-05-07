alert
var a = 10
    a = 15

console.log(a);
// output will be 15 because we can reassign a variable declared with var//

let b = 20
// let b = 30//
// error happens because we cannot redeclare a variable declared with let//

console.log(b);

const c = 50
console.log(c);
//output is 50 because we cannot reassign a variable declared with const//
const x = 10
x = 20
// error happens because we cannot reassign a variable declared with const//    
var p = 5
var p = 10
console.log(p);
// output will be 10 because we can redeclare a variable declared with var//
let q = 25
q =q + 10
console.log(q);
// output will be 35 because we can reassign a variable declared with let//
const r = 7
console.log(r+3);
// output will be 10 because we can add a number to a constant declared with const//
//__10; let is the ans//__10; const is the ans// depends on usage//

// normal output//
console.log()

// warning//
console.warn()

// error//
console.error()    

// console.clear() 
// will clear the console screen//
let a = "hello"
console.log(typeof a);
// output will be string because a is a string//
let b = 100
console.log(typeof b);
// output will be number because b is a number//
let c = false
console.log(typeof c);
// output will be boolean because c is a boolean//
let d
console.log(typeof d);  
// output will be undefined because d is not assigned a value//

//type of null is object in javascript//
let e = null
console.log(typeof e);
// output will be object because e is null//

// conversion of string to number//
let f = "25"
console.log(Number(f));
// output will be 25 because the string "25" is converted to a number//

// array of three fruits//
let arr = ["apple", "banana", "orange"]
console.log(arr);
// output will be ["apple", "banana", "orange"] because arr is an array of three fruits//

let arr = ["a", "b", "c"]
console.log(arr[1]);
// output will be "b" because arr[1] is the second element of the array//

let arr = ["x", "y", "z"]
console.log(arr[arr.length - 1]);
// output will be "z" because arr is an array of three elements//

// how to get first element of an array//
let arr = ["p", "q", "r"]
console.log(arr[0]);
// output will be "p" because arr[0] is the first element of the array//    


let arr = ["apple", "banana",]
console.log(arr.length);
// output will be 2 because arr is an array of two elements//

//  adding an element to an array//
arr.push("grape");
console.log(arr);
// output will be ["apple", "banana", "grape"] because "grape" is added to the end of the array//

//creating an object with name and age//
let person = {
    name: "Anil",
    age: 30
};
console.log(person);
// output will be { name: "Anil", age: 30 } because person is an object with name and age properties//

let object = {
    fruits: ["apple", "banana"]
};
console.log(object.fruits[1]);
// output will be "banana" because object.fruits[1] is the second element of the fruits array in the object//

// how to access last element inside object array//
let object = {
    fruits: ["apple", "banana", "orange"]
};
console.log(object.fruits[object.fruits.length - 1]);
// output will be "orange" because object.fruits[object.fruits.length - 1] is the last element of the fruits array in the object//



//console.log("5+3")//
// output will be "5+3" because it is a string and not a mathematical expression//

console.log(5+3)
// output will be 8 because it is a mathematical expression and not a string//

console.log(10%3)
// output will be 1 because it is the remainder of 10 divided by 3//    

console.log(2**3)
// output will be 8 because it is 2 raised to the power of 3//  

console.log(10/2)
// output will be 5 because it is the result of 10 divided by 2//

// section 7// increment and decrement operators//
let a = 5
a++
console.log(a);
// output will be 6 because a  is incremented by 1// 

let b = 5
let c = b++
console.log(b, c);
// output will be 6 and 5 because b is incremented by 1 after the value of c is assigned//

let x = 5
let y = ++x
console.log(x, y);
// output will be 6 and 6 because x is incremented by 1 before the value of y is assigned// 

let m = 3
let n = m--
console.log(m,n);
// output will be 2 and 3 because m is decremented by 1 after the value of n is assigned//


// section 8// comparison operators//
console.log(5 == "5");
// output will be true because == performs type coercion//

console.log(5 === "5");
// output will be false because === does not perform type coercion//    

console.log(true && false|| true);
// output will be true because && has higher precedence than || and true && false is false and false || true is true//

// section 9 ternary operator//
5 > 3 ? console.log("yes") : console.log("no");
// output will be "yes" because 5 is greater than 3//


