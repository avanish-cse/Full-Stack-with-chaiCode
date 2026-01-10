// const students = {
//   std1: "Rahul",
//   marks: 54,
//   print() {
//     console.log(this.marks);
//   },
// };

// class softDrink {
//   constructor(brand, flavour) {
//     this.brand = brand;
//     this.flavour = flavour;
//     console.log("creating new object", brand);
//     this.drinkType = "soft drink";
//   }
// }

// let sprite = new softDrink("sprite", "Lime");

// Practice Questions

// PQ1

let data = "here is the website data";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("here is the data: ", data);
  }
}

let rahul = new User("Rahul", "bhandari420@gmail.com");
let avanish = new User("Avanish", "avanishchaurasiya71@gmail.com");

// // PQ2.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  // super(name, email)
  editData() {
    data = prompt("You can edit website data! Type new data here: ");
  }
}
