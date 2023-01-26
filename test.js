const myModule = require("./lib.js");

const isEqual = (a = [], b = []) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

// Map method test

const testMap = (input, callback, expected) => {
  const actual = myModule.map(input, callback);
  console.log(`
      Inputs: ${input}
      Actual: ${actual}
      Expected: ${expected}
      Assess: ${isEqual(actual, expected)}
    `);
};

console.log("[map]: Testing started");
testMap([1, 2, 3, 4], (v) => v * 2, [2, 4, 6, 8]);
testMap([1, 2, 3, 4], (v) => v + 2, [3, 4, 5, 6]);
testMap([1, 2, 3, 4], (v) => v, [1, 2, 3, 4]);
console.log("[map]: Testing done");

// Reduce method test

const testReduce = (input, initialValue, callback, expected) => {
  const actual = [myModule.reduce(input, callback, initialValue)];
  console.log(`
        Inputs: ${input}
        Initial Value: ${initialValue}
        Actual: ${actual}
        Expected: ${expected}
        Assess: ${isEqual(actual, expected)}
      `);
};

console.log("[reduce]: Testing started");
testReduce([1, 2, 3, 4], 0, (a, b) => a + b, [10]);
testReduce([0, 1, 1, 5], 5, (a, b) => a + b, [12]);
testReduce([1, 2, 3, 4], 0, (a, b) => a * b, [24]);
console.log("[reduce]: Testing done");

const testFilter = (input, callback, expected) => {
  const actual = myModule.filter(input, callback);
  console.log(`
  Inputs: ${input}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};

console.log("[filter]: Testing started");
testFilter([1, 2, 3, 4], (a) => a % 2 === 0, [2, 4]);
testFilter(["wolf", "football", "mega", "basketball"], (a) => a.length > 5, [
  "football",
  "basketball",
]);
testFilter([1, "two", 3, 4], (a) => typeof a === "string", ["two"]);
console.log("[filter]: Testing done");

const testForEach = (arr, callback, expected) => {
  const actual = myModule.forEach(arr, callback);
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[forEach]: Testing started");
testForEach([1, 2, 3], (num, i, array) => (array[i] = num * 2), [2, 4, 6]);
testForEach(["one", "two", "three"], (num) => num, ["one", "two", "three"]);
testForEach(
  [1, 2, 3, 4, 5],
  (num, i, array) => {
    if (array[i] % 2 === 0) {
      return (array[i] = num * 2);
    }
  },
  [1, 4, 3, 8, 5]
);
console.log("[forEach]: Testing done");

const testTake = (arr, n, expected) => {
  const actual = myModule.take(arr, n);
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[take]: Testing started");
testTake([], 3, []);
testTake([1, 2, 3], 2, [1, 2]);
testTake([1, 2, 3], 7, [1, 2, 3]);
console.log("[take]: Testing done");

const testSkip = (arr, n, expected) => {
  const actual = myModule.skip(arr, n);
  console.log(`
  Inputs: ${arr}
  Actual: ${actual}
  Expected: ${expected}
  Assess: ${isEqual(actual, expected)}
`);
};
console.log("[skip]: Testing started");
testSkip([], 3, []);
testSkip([1, 2, 3], 2, [3]);
testSkip([1, 2, 3], 7, []);
console.log("[skip]: Testing done");