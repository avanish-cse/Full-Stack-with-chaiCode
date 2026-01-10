function numberIterator(values) {
  let nextIndex = 0;
  return {
    next() {
      if (nextIndex < values.length) {
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}


let arr = [1, 3,  2, 23, 4, "Avanish"];
// console.log(numberIterator(arr).next().value);

let iterator = numberIterator(arr)

let newArr = [];
newArr.push(iterator.next().value)



newArr.push(iterator.next().value)
newArr.push(iterator.next().value)
newArr.push(iterator.next().value)
newArr.push(iterator.next().value)
newArr.push(iterator.next().value)

