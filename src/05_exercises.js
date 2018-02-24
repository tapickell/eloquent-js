// Higher Order Functions

function greaterThan(n) {
  return (m) => m > n;
}

function unless(test, then) {
  if (!test) then();
}

console.log(greaterThan(10)(11));
unless(greaterThan(10)(9), () => console.log("NOPE"));

function dividesEvenlyBy(x) {
  return function(y) {
    return y % x == 0;
  };
}

const mod3 = dividesEvenlyBy(3);
const mod5 = dividesEvenlyBy(5);
const mod15 = dividesEvenlyBy(15);

function isFizz(x) {
  return mod3(x) ? 'Fizz' : x
}

function isBuzz(x) {
  return mod5(x) ? 'Buzz' : x
}

function isFizzBuzz(x) {
  return mod15(x) ? 'FizzBuzz' : x
}

function removeHead(x) {
  x > 0
}

[...Array(101)]
  .filter(removeHead)
  .map(isFizz)
  .map(isBuzz)
  .map(isFizzBuzz)
  .map(console.log)
