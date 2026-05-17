// Present students
const presentStudents = ["Rahul", "Sneha", "Amit"];

// Absent students
const absentStudents = ["Kiran", "Pooja"];

// Merge arrays using spread operator
const allStudents = [...presentStudents, ...absentStudents];

// Add one new student at the end
allStudents.push("Ravi");

// Print final array
console.log("Final Student List:");
console.log(allStudents);

// output:
// Final Student List:
// [ 'Rahul', 'Sneha', 'Amit', 'Kiran', 'Pooja', 'Ravi' ]

// Mobile details object
const mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 75000
};

// Charger details object
const charger = {
    chargerType: "Fast Charger",
    warranty: "1 Year"
};

// Merge objects using spread operator
const productDetails = {
    ...mobile,
    ...charger,
    deliveryDate: "20-May-2026"
};

// Print final object
console.log("Final Product Details:");
console.log(productDetails);
// output:
// Final Product Details:
// {    brand: 'Samsung',
//     model: 'Galaxy S24',
//     price: 75000,  
//     chargerType: 'Fast Charger',
//     warranty: '1 Year',
//     deliveryDate: '20-May-2026' 
// }

// Function using rest operator
function orderFood(...items) {

    console.log("Food Items:", items);

    // Total items
    console.log("Total Items Ordered:", items.length);

    // First item
    console.log("First Item:", items[0]);

    // Last item
    console.log("Last Item:", items[items.length - 1]);
}

// Function call
orderFood("Pizza", "Burger", "Pasta", "Ice Cream");
// output:
// Food Items: [ 'Pizza', 'Burger', 'Pasta', 'Ice Cream' ]
// Total Items Ordered: 4
// First Item: Pizza
// Last Item: Ice Cream 

// Employee array
const employees = [
    { name: "Arun", salary: 45000 },
    { name: "Meena", salary: 60000 },
    { name: "Raj", salary: 75000 },
    { name: "Divya", salary: 30000 }
];

// Filter employees with salary above 50000
const highSalaryEmployees = employees.filter(employee => employee.salary > 50000);

// Print filtered employees
console.log("Employees with Salary Above 50000:");
console.log(highSalaryEmployees);
// output:
// Employees with Salary Above 50000:
// [ { name: 'Meena', salary: 60000 }, { name: 'Raj', salary: 75000 } ] 

// Scores array
const scores = [100, 200, 150, 250, 300];

// Use reduce to calculate total score
const totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

// Print final total
console.log("Total Score:", totalScore);
// output:
// Total Score: 1000    

// end of task6.js // The above code demonstrates the use of spread operator, rest operator, array methods like filter and reduce, and object manipulation in JavaScript.


