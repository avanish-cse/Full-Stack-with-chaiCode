function* numberGenerator(){
    let i = 0;

    while( i < 5){
        yield i++;
    }
}

let generator = numberGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
