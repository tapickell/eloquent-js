const util = require('util');

var again = function() { console.log("\nAgain....\n")};
var new_exercise = function() { console.log("\nLet's try something different now.\n\n\n")};

var snake_case = "words_connected_by_underscores"; // used more in other languages
var camelCase = "wordsSeperatedByCapitalLetters"; // used more in JS, Java
// var kebab-case = "words-connected-by-hyphens"; not valid in JS

var name = "Snow White";
var the_answer = 42;
var ready = true;

var sw = name;
var snow_w = "Snow White";

console.log(name)
console.log(sw)
console.log(snow_w)

console.log(sw === name)
console.log(sw == name)
console.log(snow_w === name)
console.log(snow_w == name)


console.log("Snow White42" == name + the_answer)

var actual = "actual"
console.log("expected" == actual)


new_exercise()
console.log("OOP Approach")

let journal = {
  entries: [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ],
  add_entry: function (events, squirrel) {
    this.entries.push({events, squirrel})
  }
}

// journal.add_entry(["work", "touched tree", "pizza", "running", "television"], false)
// journal.add_entry(["work", "touched tree", "ice cream", "cauliflower", "lasagna", "brushed teeth"], false)
// journal.add_entry(["weekend", "cycling", "break", "peanuts", "beer"], true)

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2])
             )
}

function PHI([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10))
}

console.log(phi([76,9,4,1]))
again()
console.log(PHI([76,9,4,1]))

function table_for(event, journal) {
  let table = [0,0,0,0]
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0
    if (entry.events.includes(event)) index += 1
    if (entry.squirrel) index += 2
    table[index] +=1
  }
  return table
}

function journal_events(journal) {
  let events = []
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event)
      }
    }
  }
  return events
}


for (const event of journal_events(journal.entries)) {
  // console.log(event + ':', phi(table_for(event, journal.entries)))
  let correlation = phi(table_for(event, journal.entries))
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ':', correlation)
  }
}

for (const entry of journal.entries) {
  if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth")
  }
}

console.log(phi(table_for("peanut teeth", journal.entries)))

let todo_list = []

function remember(list, task) {
  return list.concat(task)
}

function get_task(list) {
  return list.slice(0,1)
}

function remember_urget(list, task) {
  return [task].concat(list)
}

function max(...numbers) {
  let result = -Infinity
  for (let number of numbers) {
    if (number > result) { result = number }
  }
  return result
}

console.log(max(99,2,54,29,90,1,23))
console.log(max(...[99,2,54,29,90,1,23]))

function random_point_on_circle(radius) {
  let angle = Math.random() * 2 * Math.PI
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)}
}

console.log(random_point_on_circle(2))

let kim = "Kim"
console.log(kim)
console.log(kim[0])

let list = [kim, "frank", "bob"]
list.age = 42
list.name = "Frank"
console.log(list)
console.log(list.age)
console.log(list.name)
console.log(list[1])
let {age} = list
console.log(age)

function range(start, end, step) {
  let arr = []
  step = (typeof step !== 'undefined') ? step : 1
  if (step === 0) return arr
  if (step < 0) {
    for (let index = start; index > end-1; index += step) { arr.push(index) }
  } else {
    for (let index = start; index < end+1; index += step) { arr.push(index) }
  }
  return arr
}

function sum(list) {
  return list.reduce((prev, curr) => prev + curr)
}
console.log(range(1, 10))
console.log(range(1, 10).length == 10)
console.log(sum(range(1, 10)))
console.log(range(1,5,2))
console.log(range(5,2,-1))
console.log(range(5,20,-1))
console.log(range(5,2))
console.log(range(1, 10, 0))

function reverseArray(list) {
  let copy = list.splice()
  for (let element of list) { copy.unshift(element) }
  return copy
}

function reverseArrayInPlace(list) {
  for (let index = 0; index < Math.floor(list.length/2); index++) {
    let opposite_index = list.length - 1 - index
    let hd = list[index], tl = list[opposite_index]
    list[index] = tl
    list[opposite_index] = hd
  }
}

console.log(reverseArray(range(1,10)))
let this_list = range(1,10)
reverseArrayInPlace(this_list)
console.log(this_list)
const stuff_constant = "HEY"
stuff = "HEY"

// here is a comment
var assert = function(expected, actual, message = "Test") {
  if (isObject(expected)) expected = JSON.stringify(expected)
  if (isObject(actual)) actual = JSON.stringify(actual)
  if (expected === actual) {
    console.log('👍  ' + message)
  } else {
    console.log('💩  ' + message + "\n   Assertion failed no match\n   " + util.inspect(expected) + "\n   " + util.inspect(actual));
  }
}

var assert_true = function(actual, message) {
  assert(true, actual, message)
}
var assert_false = function(actual, message) {
  assert(false, actual, message)
}
assert(["_", "o", "o", "_"], ["_", "o", "o", "_"], "These are the same yo")

function prepend(node, list) {
  return { value: node, rest: list }
}

function arrayToList(arr) {
  return arr.reduceRight(
    (list, value) => prepend(value, list)
  , null)
}

assert({ value: 50, rest: null }, prepend(50, null), "prepend 50, null")
assert({value: 10, rest: {value: 20, rest: null}}, arrayToList([10, 20]), "arrayToList")

function listToArray(list) {
  if (list.rest == null) return list.value
  return [list.value].concat(listToArray(list.rest))
}

assert([10, 20], listToArray({value: 10, rest: {value: 20, rest: null}}), "listToArray")

function nthInList(list, index) {
  if (index == 0) return list.value
  return nthInList(list.rest, index - 1)
}

assert(10, nthInList(arrayToList([10, 20, 30]), 0), "0 nth")
assert(20, nthInList(arrayToList([10, 20, 30]), 1), "1 nth")
assert(30, nthInList(arrayToList([10, 20, 30]), 2), "2 nth")

function convertObjectToJSON(value) {
  if (isObject(value)) return JSON.stringify(value)
  return value
}

function deepEqual(value1, value2) {
  return convertObjectToJSON(value1) === convertObjectToJSON(value2)
}

function isObject(value) {
  return typeof value === "object" && value != null
}

function assert_equal(value1, value2) {
  if (isObject(value1) && isObject(value2)) {
    if (Object.keys(value1) === Object.keys(value2)) {
      return Object.values(value1).map(
        (current, index) => assert_equal(current, Object.values(value2)[index])
      ).every((value) => value == true)
    }
    return false
  }
  return value1 === value2
}

let test_obj = {here: {is: "an"}, object: 2}

assert_true(deepEqual(test_obj, test_obj), "test_obj == self")
assert_false(deepEqual(test_obj, {here: 1, object: 2}), "test_obj != other obj")
assert_true(deepEqual(test_obj, {here: {is: "an"}, object: 2}), "test_obj == new duplicate obj")

assert_true(assert_equal(test_obj, test_obj), "test_obj == self")
assert_false(assert_equal(test_obj, {here: 1, object: 2}), "test_obj != other obj")
assert_true(assert_equal(test_obj, {here: {is: "an"}, object: 2}), "test_obj == new duplicate obj")
