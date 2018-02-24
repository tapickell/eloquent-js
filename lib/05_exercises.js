'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Higher Order Functions

function greaterThan(n) {
  return function (m) {
    return m > n;
  };
}

function unless(test, then) {
  if (!test) then();
}

console.log(greaterThan(10)(11));
unless(greaterThan(10)(9), function () {
  return console.log("NOPE");
});

function dividesEvenlyBy(x) {
  return function (y) {
    return y % x == 0;
  };
}

var mod3 = dividesEvenlyBy(3);
var mod5 = dividesEvenlyBy(5);
var mod15 = dividesEvenlyBy(15);

function isFizz(x) {
  return mod3(x) ? 'Fizz' : x;
}

function isBuzz(x) {
  return mod5(x) ? 'Buzz' : x;
}

function isFizzBuzz(x) {
  return mod15(x) ? 'FizzBuzz' : x;
}

function removeHead(x) {
  x > 0;
}

[].concat(_toConsumableArray(Array(101))).filter(removeHead).map(isFizz).map(isBuzz).map(isFizzBuzz).map(console.log);