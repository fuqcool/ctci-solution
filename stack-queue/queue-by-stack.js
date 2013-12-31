var assert = require('assert');
var Stack = require('./stack.js');

function Queue(size) {
  this.s1 = new Stack(size);
  this.s2 = new Stack(size);
}

Queue.prototype.enque = function (value) {
  while (!this.s1.empty()) {
    this.s2.push(this.s1.pop());
  }

  this.s2.push(value);

  while (!this.s2.empty()) {
    this.s1.push(this.s2.pop());
  }
};

Queue.prototype.deque = function () {
  return this.s1.pop();
};

Queue.prototype.empty = function () {
  return this.s1.empty();
};

Queue.prototype.toArray = function () {
  return this.s1.toArray();
};

// tests

var q = new Queue();

q.enque(1);
q.enque(2);
q.enque(3);

assert.deepEqual(q.toArray(), [1, 2, 3], 'should create a queue');

q.deque();

assert.deepEqual(q.toArray(), [2, 3], 'should deque an element');
