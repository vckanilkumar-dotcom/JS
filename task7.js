// start of task7.js// Fetching data from the API and converting usernames to uppercase



fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const upperUsers = data.map((user) =>
      user.username.toUpperCase()
    );

    console.log(upperUsers);
  })
  .catch((error) => console.log(error));

  // output: ["BRET", "ANTONETTE", "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"]

  // API TASK EXPENSIVE PRODUCTS // Fetching data from the API and filtering products with price greater than 100

  fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const expensiveProducts = products.filter(
      (product) => product.price > 100
    );

    console.log(expensiveProducts);
  })
  .catch((error) => console.log(error));

  // output: [{id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, ...}, {id: 2, title: "Mens Casual Premium Slim Fit T-Shirts ", price: 22.3, ...}, ...]

  // date concept//

  const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(hours + " : " + minutes + " : " + seconds);

// output: 14 : 30 : 45 (example output, actual output will vary based on current time)


// string concept task//

let name = "   Anil Kumar  ";

let finalName = name.trim().toUpperCase();

console.log(finalName);

console.log(finalName.includes("KUMAR"));

// output: "ANIL KUMAR"
// output: true 

// student rank system//

const marks = [450, 300, 700, 200, 900];

const sortedMarks = marks.sort((a, b) => b - a);

const top3 = sortedMarks.slice(0, 3);

console.log(top3);

// output: [900, 700, 450]  


// end of task7.js