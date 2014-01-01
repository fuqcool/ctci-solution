var Stack = require('./stack.js');
var assert = require('assert');

/**
 * GIVEN: a stack that contains numbers
 * EFFECT: sort given stack in ascending order
 * EXAMPLES: see tests
 */
function sort(s) {
  var t = new Stack();

  while (!s.isEmpty()) {
    var value = s.pop();

    while (!t.isEmpty() && t.peek() < value) {
      s.push(t.pop());
    }
    t.push(value);
  }

  while (!t.isEmpty()) {
    s.push(t.pop());
  }
}

var s = new Stack();

s.push(9);
s.push(5);
s.push(2);
s.push(7);
s.push(10);
s.push(17);
s.push(14);

sort(s);

assert.deepEqual(s.toArray(), [17, 14, 10, 9, 7, 5, 2], 'should sort the stack');
