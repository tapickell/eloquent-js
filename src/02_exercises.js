var again = function() { console.log("\nAgain....\n")};
var new_exercise = function() { console.log("\nLet's try something different now.\n\n\n")};

var holder = "";
for (let index = 0; index < 7; index++) {
  holder = holder + "#";
  // console.log(holder);
}

again();

for (let index = 0; index < 7; index++) {
  // console.log("#".repeat(index+1));
}

again();

var index = 0;
while (index < 7) {
  // console.log("#".repeat(index+1));
  index += 1;
}

again();

[1,2,3,4,5,6,7].forEach(times => {
  // console.log("#".repeat(times));
});

again();

var range = Array.apply(null, {length: 100}).map(Number.call, Number)

range.forEach(times => {
  // console.log("#".repeat(times));
});

new_exercise();

var is_fizz = function(number) {
  return number % 3 == 0
}
var is_buzz = function(number) {
  return number % 5 == 0
}

console.log("Test")

var assert = function(expected, actual) {
  if (expected === actual) {
    console.log('.')
  } else {
    console.log("Assertion failed " + expected + " != " + actual);
  }
}
var assert_true = function(actual) {
  assert(true, actual)
}
var assert_false = function(actual) {
  assert(false, actual)
}

assert_true(is_fizz(3))
assert_true(is_fizz(15))
assert_false(is_fizz(1))
assert_false(is_fizz(5))
assert_true(is_buzz(5))
assert_true(is_buzz(15))
assert_false(is_buzz(1))
assert_false(is_buzz(3))

console.log("End testing")

var is_fizz = function(number) {
  return number % 3 == 0
}
var is_buzz = function(number) {
  return number % 5 == 0
}

var range = Array.apply(null, {length: 101}).map(Number.call, Number).slice(1)

range.forEach(element => {
  let str = ""
  if (is_fizz(element)) {
    str = str + "Fizz"
  }
  if (is_buzz(element)) {
    str = str + "Buzz"
  }
  if (str == "") {
    str = element
  }
  console.log(str)
});

again();

var fizz = function(number) {
  return (number % 3 == 0) ? "Fizz" : ""
}
var buzz = function(number) {
  return (number % 5 == 0) ? "Buzz" : ""
}
var empty = function(str, element) {
  return (str == "") ? element : ""
}

range.forEach(element => {
  let str = ""
  str = str + fizz(element)
  str = str + buzz(element)
  str = str + empty(str, element)
  console.log(str)
});

new_exercise();

// var board_size = 8;
// var board_size = 12;
var board_size = 18;

var range = Array.apply(null, {length: board_size * board_size})
                 .map(Number.call, Number)
                 .map(board_mapper(board_size))
                 .join('')

console.log(range)

function board_mapper(board_size) {
  return function(element) {
    if (element % (board_size + 1) == 0) {
      return "\n"
    } else if (element % 2 == 0) {
      return "#"
    } else {
      return " "
    }
  }
}

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      console.log("Found a way")
      return history
    } else if (current > target) {
      console.log(`Nope: ${current}`)
      return null
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`)
    }
  }
  return find(1, "1")
}

console.log("Find Solution 42")
console.log(findSolution(42))

new_exercise()

function printFamrInventory(cows, chickens) {
  console.log(`${String(cows).padStart(3, "0")} Cows`)
  console.log(`${String(chickens).padStart(3, "0")} Chickens`)
}
printFamrInventory(7, 11)

again()

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function outputInventory(inventory) {
  for (const type in inventory) {
    let count = inventory[type];
    console.log(`${String(count).padStart(3, "0")} ${capitalize(type)}`)
  }
}

outputInventory({"cows": 23, "chickens": 11, "horses": 8, "pigs": 1})

new_exercise()

function min(a, b) {
  return (a < b) ? a : b
}

console.log(min(0, 10))
console.log(min(0, -10))

new_exercise()

function is_even(number) {
  if (number == 0) {
    return true
  } else if (number == 1) {
    return false
  } else {
    return is_even(number - 2)
  }
}

console.log(is_even(50))

again()

function is_even_better(number) {
  if (number < 2) {
    return number == 0
  } else {
    return is_even(number - 2)
  }
}

console.log(is_even_better(50))
console.log(is_even_better(75))
console.log(is_even_better(0))
console.log(is_even_better(1))
console.log(is_even_better(-1))

new_exercise()

function count_char(str, char) {
  return str.length - str.split(char).join('').length
}

function count_bs(str) {
  return count_char(str, "B")
}

console.log(count_bs("BBC"))
console.log(count_char("kakkerlak", "k"))