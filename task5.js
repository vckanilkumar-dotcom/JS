// Student Registration Form

let studentName = prompt("Enter Student Name:ANIL");
let department = prompt("Enter Department:EEE");
let age = prompt("Enter Age:20");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

// ATM Withdrawal System

let balance = 10000;
let amount = Number(prompt("Enter Withdrawal Amount:"));

if (amount >= 100 && amount <= balance) {
    console.log("Transaction Successful");
} else if (amount < 100) {
    console.log("Minimum withdrawal amount is 100");
} else {
    console.log("Insufficient Balance");
}

// Swiggy Discount Checker

let orderAmount = Number(prompt("Enter Order Amount:"));

let result = orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied";

console.log(result);

// Instagram Login System

let username = prompt("Enter Username:");

if (username === "admin") {

    let password = prompt("Enter Password:");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}


// Traffic Signal System

let signal = prompt("Enter Signal Color:");

switch (signal) {

    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}

// Employee Salary Calculator

function salaryCalculation(basicSalary, bonus) {

    let totalSalary = basicSalary + bonus;

    return totalSalary;
}

console.log(salaryCalculation(25000, 5000));


// E-Commerce Cart Total

let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);


// WhatsApp Contact Book

let contact = {
    name: "John Doe",
    phone: "9876543210",
    status: "Available"
};

for (let key in contact) {
    console.log(key + " : " + contact[key]);
}

// Movie Ticket Booking

function payment() {
    console.log("Payment Successful");
}

function bookTicket(callback) {
    console.log("Ticket Booked Successfully");

    callback();
}

bookTicket(payment);


// Food Delivery Time Tracker

function* deliveryStatus() {

    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let order = deliveryStatus();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);