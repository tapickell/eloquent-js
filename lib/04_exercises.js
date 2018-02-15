"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var again = function again() {
  console.log("\nAgain....\n");
};
var new_exercise = function new_exercise() {
  console.log("\nLet's try something different now.\n\n\n");
};

var snake_case = "words_connected_by_underscores"; // used more in other languages
var camelCase = "wordsSeperatedByCapitalLetters"; // used more in JS, Java
// var kebab-case = "words-connected-by-hyphens"; not valid in JS

var name = "Snow White";
var the_answer = 42;
var ready = true;

var sw = name;
var snow_w = "Snow White";

console.log(name);
console.log(sw);
console.log(snow_w);

console.log(sw === name);
console.log(sw == name);
console.log(snow_w === name);
console.log(snow_w == name);

console.log("Snow White42" == name + the_answer);

var actual = "actual";
console.log("expected" == actual);

new_exercise();
console.log("OOP Approach");

var journal = {
  entries: [{ "events": ["carrot", "exercise", "weekend"], "squirrel": false }, { "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false }, { "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false }, { "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false }, { "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false }, { "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false }, { "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false }, { "events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false }, { "events": ["cauliflower", "brushed teeth", "work"], "squirrel": false }, { "events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false }, { "events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false }, { "events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false }, { "events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false }, { "events": ["spaghetti", "brushed teeth", "work"], "squirrel": false }, { "events": ["brushed teeth", "computer", "work"], "squirrel": false }, { "events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false }, { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false }, { "events": ["brushed teeth", "work"], "squirrel": false }, { "events": ["cauliflower", "reading", "weekend"], "squirrel": false }, { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false }, { "events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false }, { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false }, { "events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false }, { "events": ["spaghetti", "nachos", "work"], "squirrel": false }, { "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false }, { "events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true }, { "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false }, { "events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false }, { "events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false }, { "events": ["potatoes", "exercise", "work"], "squirrel": false }, { "events": ["pizza", "ice cream", "computer", "work"], "squirrel": false }, { "events": ["lasagna", "ice cream", "work"], "squirrel": false }, { "events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false }, { "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false }, { "events": ["potatoes", "brushed teeth", "work"], "squirrel": false }, { "events": ["carrot", "work"], "squirrel": false }, { "events": ["pizza", "beer", "work", "dentist"], "squirrel": false }, { "events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false }, { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false }, { "events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false }, { "events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false }, { "events": ["lasagna", "peanuts", "work"], "squirrel": true }, { "events": ["pizza", "work"], "squirrel": false }, { "events": ["potatoes", "exercise", "work"], "squirrel": false }, { "events": ["brushed teeth", "exercise", "work"], "squirrel": false }, { "events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false }, { "events": ["pizza", "cycling", "weekend"], "squirrel": false }, { "events": ["carrot", "brushed teeth", "weekend"], "squirrel": false }, { "events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false }, { "events": ["pizza", "peanuts", "candy", "work"], "squirrel": true }, { "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false }, { "events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false }, { "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false }, { "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false }, { "events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false }, { "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false }, { "events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false }, { "events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false }, { "events": ["bread", "candy", "work"], "squirrel": false }, { "events": ["potatoes", "nachos", "work"], "squirrel": false }, { "events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false }, { "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false }, { "events": ["brussel sprouts", "running", "work"], "squirrel": false }, { "events": ["brushed teeth", "work"], "squirrel": false }, { "events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false }, { "events": ["candy", "brushed teeth", "work"], "squirrel": false }, { "events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false }, { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false }, { "events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false }, { "events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false }, { "events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false }, { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false }, { "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false }, { "events": ["pizza", "brushed teeth", "work"], "squirrel": false }, { "events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true }, { "events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false }, { "events": ["brushed teeth", "running", "work"], "squirrel": false }, { "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false }, { "events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false }, { "events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false }, { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false }, { "events": ["carrot", "reading", "weekend"], "squirrel": false }, { "events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true }, { "events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false }, { "events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false }, { "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false }, { "events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false }, { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false }, { "events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false }, { "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false }],
  add_entry: function add_entry(events, squirrel) {
    this.entries.push({ events: events, squirrel: squirrel });
  }

  // journal.add_entry(["work", "touched tree", "pizza", "running", "television"], false)
  // journal.add_entry(["work", "touched tree", "ice cream", "cauliflower", "lasagna", "brushed teeth"], false)
  // journal.add_entry(["weekend", "cycling", "break", "peanuts", "beer"], true)

};function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}

function PHI(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      n00 = _ref2[0],
      n01 = _ref2[1],
      n10 = _ref2[2],
      n11 = _ref2[3];

  return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

console.log(phi([76, 9, 4, 1]));
again();
console.log(PHI([76, 9, 4, 1]));

function table_for(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i],
        index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journal_events(journal) {
  var events = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = journal[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = entry.events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var event = _step2.value;

          if (!events.includes(event)) {
            events.push(event);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return events;
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = journal_events(journal.entries)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var event = _step3.value;

    // console.log(event + ':', phi(table_for(event, journal.entries)))
    var correlation = phi(table_for(event, journal.entries));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ':', correlation);
    }
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = journal.entries[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var entry = _step4.value;

    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
      entry.events.push("peanut teeth");
    }
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

console.log(phi(table_for("peanut teeth", journal.entries)));

var todo_list = [];

function remember(list, task) {
  return list.concat(task);
}

function get_task(list) {
  return list.slice(0, 1);
}

function remember_urget(list, task) {
  return [task].concat(list);
}

function max() {
  var result = -Infinity;

  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = numbers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var number = _step5.value;

      if (number > result) {
        result = number;
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return result;
}

console.log(max(99, 2, 54, 29, 90, 1, 23));
console.log(max.apply(undefined, [99, 2, 54, 29, 90, 1, 23]));

function random_point_on_circle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle),
    y: radius * Math.sin(angle) };
}

console.log(random_point_on_circle(2));

var kim = "Kim";
console.log(kim);
console.log(kim[0]);

var list = [kim, "frank", "bob"];
list.age = 42;
list.name = "Frank";
console.log(list);
console.log(list.age);
console.log(list.name);
console.log(list[1]);
var age = list.age;

console.log(age);

function range(start, end, step) {
  var arr = [];
  step = typeof step !== 'undefined' ? step : 1;
  if (step === 0) return arr;
  if (step < 0) {
    for (var index = start; index > end - 1; index += step) {
      arr.push(index);
    }
  } else {
    for (var _index = start; _index < end + 1; _index += step) {
      arr.push(_index);
    }
  }
  return arr;
}

function sum(list) {
  return list.reduce(function (prev, curr) {
    return prev + curr;
  });
}
console.log(range(1, 10));
console.log(range(1, 10).length == 10);
console.log(sum(range(1, 10)));
console.log(range(1, 5, 2));
console.log(range(5, 2, -1));
console.log(range(5, 20, -1));
console.log(range(5, 2));
console.log(range(1, 10, 0));

function reverseArray(list) {
  var copy = list.splice();
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = list[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var element = _step6.value;
      copy.unshift(element);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return copy;
}

function reverseArrayInPlace(list) {
  for (var index = 0; index < Math.floor(list.length / 2); index++) {
    var opposite_index = list.length - 1 - index;
    var hd = list[index],
        tl = list[opposite_index];
    list[index] = tl;
    list[opposite_index] = hd;
  }
}

console.log(reverseArray(range(1, 10)));
var this_list = range(1, 10);
reverseArrayInPlace(this_list);
console.log(this_list);
var stuff_constant = "HEY";
stuff = "HEY";