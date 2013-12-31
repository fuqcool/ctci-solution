var assert = require('assert');
var Queue = require('./queue.js');

function Stack(size) {
  this.q1 = new Queue();
  this.q2 = new Queue();
}

Stack.prototype.push = function (value) {
  this.q2.enque(value);

  while (!this.q1.empty()) {
    this.q2.enque(this.q1.deque());
  }

  var tmp = this.q2;
  this.q2 = this.q1;
  this.q1 = tmp;
};

Stack.prototype.pop = function () {
  return this.q1.deque();
};

Stack.prototype.empty = function () {
  return this.q1.empty();
};

Stack.prototype.toArray = function () {
  return this.q1.toArray();
};

// tests

var s = new Stack();

s.push(5);
s.push(7);
s.push(8);

assert.deepEqual(s.toArray(), [8, 7, 5], 'should create a stack');

s.pop();

assert.deepEqual(s.toArray(), [7, 5], 'should pop an element');

s.pop();

assert.deepEqual(s.toArray(), [5], 'should pop another element');
