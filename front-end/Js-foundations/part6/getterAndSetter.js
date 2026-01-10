class Employee {
  constructor(name, salary) {
    (this.name = name), (this._salary = salary);
  }

  get salary() {
    return `you are not allowed to access salary !!`;
  }

  set salary(value) {
    if (value < 0) {
      throw new Error("Negative salary is not allowed");
    } else {
      this._salary = value;
    }
  }
}

let Rahul = new Employee("Rahul", 15000);
Rahul.salary = -22;
console.log(Rahul._salary);
