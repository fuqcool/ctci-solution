var assert = require('assert');
var Stack = require('./stack.js');

/**
 * Hanoi problem
 * GIVEN: three stacks
 * EFFECT: move plates from left stack to right stack
 * EXAMPLES: see tests
 */
function hanoi(left, middle, right) {
  hanoiHelper(left, middle, right, left.size());
}

function hanoiHelper(left, middle, right, n) {
  if (n === 1) {
    move(left, right);
  } else {
    hanoiHelper(left, right, middle, n - 1);
    move(left, right);
    hanoiHelper(middle, left, right, n - 1);
  }
}

function move(src, tgt) {
  if (src.size() && tgt.size() && (src.peek() > tgt.peek())) {
    console.error('unable to execute move');
    process.exit();
  }

  tgt.push(src.pop());
}


// tests
(function () {
  var left = new Stack();
  left.push(4);
  left.push(3);
  left.push(2);
  left.push(1);

  var middle = new Stack();
  var right = new Stack();

  hanoi(left, middle, right);

  assert.equal(left.size(), 0);
  assert.equal(middle.size(), 0);
  assert.equal(right.size(), 4);

  assert.deepEqual(right.toArray(), [1, 2, 3, 4]);
}());
