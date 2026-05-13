// task 1 //
function welcomeUser(name) {
    console.log("Welcome " + name);
}

welcomeUser("Mav");
// output Welcome Mav

//task 2 //

function squareNumber(num) {
    return num * num;
}

console.log(squareNumber(7));
// output 49

// task 3 //
const Employee = {
    name: "Rahul",
    salary: 50000,

    employeeBonus: function(bonus) {
        console.log(this.name);
        console.log(this.salary + bonus);
    }
};

Employee.employeeBonus(5000);
// output Rahul
// output 55000 

// task 4 //

function checkScope() {

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a); // works
        console.log(b); // works
        console.log(c); // works
    }

    console.log(a); // works

    // console.log(b); // Error
    // console.log(c); // Error
}

checkScope();
// output 10
// output 20
// output 30
// output 10

// task 5 //
const add = (a, b) => {
    console.log(a + b);
};

add(5, 3);
// output 8

// task 6 //
function multiply(a, b) {
    return a * b;
}

function calculator(callback, num1, num2) {
    console.log(callback(num1, num2));
}

calculator(multiply, 5, 2);
// output 10

// task 7 //
function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const data = offers();

console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
// output 50% OFF
// output Free Delivery
// output Cashback  

// task 8 //

function student(name, course = "JavaScript") {
    console.log(name);
    console.log(course);
}

student("Ameel");
student("Amee", "React");
// output Ameel
// output JavaScript
// output Amee
// output React 

// task 9 //
function multi(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));
// output 24

// task 10 //
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];

console.log(merged);
// output [1, 2, 3, 4, 5, 6]

// task 11 //
const obj1 = { name: "Navi" };
const obj2 = { role: "Developer" };

const finalObj = { ...obj1, ...obj2 };

console.log(finalObj);
// output { name: "Navi", role: "Developer" }

// task 12 //
function numbers(...num) {

    console.log(num);

    let total = num.reduce((sum, value) => sum + value, 0);

    console.log(total);
}

numbers(1, 2, 3, 4);
// output [1, 2, 3, 4]
// output 10    

// task 13 //

const students = [];

// Add Student
function addStudent(name, marks) {

    const student = {
        id: students.length + 1,
        name,
        marks
    };

    students.push(student);

    console.log("Student Added");
}

// Print Students
function printStudents() {
    console.log(students);
}

// Callback Function
function calculateMarks(student, callback) {
    return callback(student.marks);
}

// Bonus Function
function addBonus(marks) {
    return marks + 5;
}

// Rest Operator
function totalMarks(...marks) {
    return marks.reduce((sum, m) => sum + m, 0);
}

// Add Students
addStudent("Anil", 80);
addStudent("Satya", 90);

// Print Students
printStudents();

// Add Bonus Marks
students.forEach(student => {

    const updatedMarks = calculateMarks(student, addBonus);

    console.log(student.name + " : " + updatedMarks);
});

// Spread Operator
const newStudents = [
    { id: 3, name: "Kiran", marks: 70 }
];

const allStudents = [...students, ...newStudents];

console.log(allStudents);

// Total Marks
console.log(totalMarks(80, 90, 70));
// output Student Added
// output Student Added
// output [{ id: 1, name: "Anil", marks: 80 }, { id: 2, name: "Satya", marks: 90 }] 
// output Anil : 85
// output Satya : 95
// output [{ id: 1, name: "Anil", marks: 80 }, { id: 2, name: "Satya", marks: 90 }, { id: 3, name: "Kiran", marks: 70 }]
// output 240   

// end of the code//
