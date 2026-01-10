class Bird {
  fly() {
    return `I am flying....`;
  }
}

class Sparrow extends Bird {
  species() {
    return `this is a sparrow`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly !!`;
  }
}

let chiggu = new Sparrow();
// console.log(chiggu.species(), " ", chiggu.fly());

let pengu = new Penguin();
console.log(pengu.fly());

