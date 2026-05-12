// task 1 //

console.log("10" + 5); // "105" - string concatenation //

console.log(10 + true); // "11"- number //

console.log(false + null); // "0" - number //

console.log("hello" + undefined); // "helloundefined" - string concatenation //

console.log([1,2] + 5); // "1,25" - string concatenation //

// task 2 // implicit type casting //

// 1. String concatenation with numbers

let a = "50" + 10; 
console.log(a);  // "5010" //
console.log(typeof a); // "string"

// 2. Boolean to number conversion
let b = true + 5;
console.log(b); // 6 //
console.log(typeof b); // "number"  

// 3. array to string conversion
let c = [1, 2] + " is an array";
console.log(c); // "1,2 is an array" //
console.log(typeof c); // "string"  

//4. object to number conversion
let d = {name: "Anil"} + 10;
console.log(d); // "[object Object]10" - object is converted to string and concatenated with number //
console.log(typeof d); // "string"

// 5. null to number conversion
let e = null + 5;
console.log(e); // 5 - null is converted to 0 and added to 5 //
console.log(typeof e); // "number"

// task 3 // explicit type casting //

 // 500 //- 
 console.log(Number("500"));
// 1 //-
 console.log(Number(true)); 
// 0 //-
 console.log(Number(false));
// 0 //-
 console.log(Number(null));
// NaN //-
console.log(Number("abc"));
// 100 //-
console.log(Number("100"));

// task 4 // Boolean constructor //
// "" - false
console.log(Boolean(""));
// "javascript" - true//
console.log(Boolean("javascript"));
// 0 - false //
console.log(Boolean(0));    
// 1 - true //
console.log(Boolean(1));    
// null - false //
console.log(Boolean(null)); 
// undefined - false //
console.log(Boolean(undefined));
// [] - true //
console.log(Boolean([]));
// {} - true //
console.log(Boolean({}));

// task 5 // student pass or fail //

let marks = 45; // change this value to test different scenarios
if (marks > 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}   
// pass// 

// task 6 // voting eligibility //
let age = 20;
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}
// eligible //

// task 7 // greater number //
let x = 50;
let y = 80;
let z = 30;

if (x > y && x > z) {
    console.log("x is greater");
} else if (y > x && y > z) {
    console.log("y is greater");
}   else {
    console.log("z is greater");
}   
// y is greater //

// task 8 // traffic light //
let trafficLight = "red";

switch (TaskSignal) {
    case "red":
        console.log("Stop"); // red light means stop //
        break;
    case "yellow":
        console.log("Ready"); // yellow light means ready to move //
        break;
    case "green":
        console.log("Go"); // green light means go //
        break;
    default:
        console.log("Invalid signal");
}

// task 9 // login system //
let username = "admin";
let password = "1234";
if (username === "admin") {
    if (password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Invalid password");
    }
}   
    else {
    console.log("Invalid username");    

}
 // login successful //

 // task 10 // session finder //
let hour = 14;  
if (hour >= 1 && hour < 12) {
    console.log("Morning");
} else if (hour >= 13 && hour < 15) {
    console.log("Afternoon");
} else if (hour >= 16 && hour < 19) {
    console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} else {
    console.log("Invalid hour");
}
// Afternoon //

// task 11 // outputs //
console.log(true + true); // 2 - true is converted to 1 and added together //
console.log("5" - 2); // 3 - string "5" is converted to number and subtracted from 2 //
console.log("5" + 2); // "52" - string "5" is concatenated with number 2 //
console.log(null + 1); // 1 - null is converted to 0 and added to 1 //
console.log(undefined + 1); // NaN - undefined cannot be converted to a number //   
console.log(Boolean("")); // false - empty string is falsy //
console.log(Number(true)); // 1 - true is converted to 1 //

// END OF CODE //