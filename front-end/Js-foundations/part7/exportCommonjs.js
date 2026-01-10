// common modules work  only in node js / not on browsers

function add(a, b) {
  return a + b;
}

function subtract(b, a) {
  return b - a;
}

module.exports = {
  add,
  subtract,
};
