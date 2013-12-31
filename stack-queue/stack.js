var assert = require('assert');

function Stack(size) {
  this.size = (size == null) ? 100 : size;
  this.top = -1;
  this.stack = [];
}

Stack.prototype.push = function (value) {
  if (this.top + 1 >= this.size) {
    return;
  }
  this.stack[++this.top] = value;
};

Stack.prototype.pop = function () {
  if (this.top < 0) {
    return null;
  }

  return this.stack[this.top--];
};

Stack.prototype.toArray = function () {
  var top = this.top;
  var result = [];

  while (top >= 0) {
    result.push(this.stack[top--]);
  }

  return result;
};

module.exports = Stack;

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
