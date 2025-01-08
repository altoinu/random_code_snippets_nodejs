function sum(a) {
  //console.log('--a', a, typeof a, (typeof a === 'undefined'));
  if (typeof a === "undefined") {
    return 0;
  } else {
    return (b) => {
      if (typeof b === "undefined") return a;
      else return sum(a + b);
    };
  }
}

console.log("sum()", sum());
console.log("sum(1)", sum(1));
console.log("sum(1)()", sum(1)());
console.log("sum(2)(1)", sum(2)(1));
console.log("sum(2)(1)()", sum(2)(1)());
console.log("sum(3)(2)(1)", sum(3)(2)(1));
console.log("sum(3)(2)(1)()", sum(3)(2)(1)());
console.log("sum(4)(3)(2)(1)", sum(4)(3)(2)(1));
console.log("sum(4)(3)(2)(1)()", sum(4)(3)(2)(1)());
