var assert = require('assert');
var Stack = require('./stack.js');

function MyStack(capacity) {
  this.capacity = (capacity == null) ? 100 : capacity;
  this.top = -1;
  this.stack = [];
  this.minStack = new Stack();
}

MyStack.prototype.push = function (value) {
  if (this.top + 1 >= this.capacity) {
    return;
  }

  this.stack[++this.top] = value;

  if (this.minStack.empty() || (value < this.minStack.peek())) {
    this.minStack.push(value);
  }
};

MyStack.prototype.pop = function () {
  if (this.empty()) {
    return null;
  }

  var value = this.stack[this.top--];

  if (value === this.minStack.peek()) {
    this.minStack.pop();
  }

  return value;
};

MyStack.prototype.empty = function () {
  return this.top < 0;
};

MyStack.prototype.min = function () {
  return this.minStack.peek();
};

MyStack.prototype.toArray = function () {
  var top = this.top;
  var result = [];

  while (top >= 0) {
    result.push(this.stack[top--]);
  }

  return result;
};


// tests

var s = new MyStack();

s.push(7);
s.push(5);
s.push(8);

console.assert(s.min() === 5);

s.push(4);

console.assert(s.min() === 4);

s.pop();

console.assert(s.min() === 5);

s.pop();
s.pop();

console.assert(s.min() === 7);
