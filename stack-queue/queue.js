var assert = require('assert');

function Queue(size) {
  this.size = (size == null) ? 100 : size;

  this.head = 0;
  this.tail = 0;
  this.queue = [];
}

Queue.prototype.next = function (i) {
  if (i + 1 >= this.size) {
    return 0;
  }

  return i + 1;
};

Queue.prototype.enque = function (value) {
  var next = this.next(this.tail);

  if (next === this.head) {
    return;
  }

  this.tail = next;
  this.queue[this.tail] = value;
};

Queue.prototype.deque = function () {
  if (this.head === this.tail) {
    return null;
  }

  this.head = this.next(this.head);

  return this.queue[this.head];
};

Queue.prototype.toArray = function () {
  var i = this.head;
  var result = [];

  while (i !== this.tail) {
    i = this.next(i);

    result.push(this.queue[i]);
  }

  return result;
};

module.exports = Queue;

// tests

var q = new Queue(4);

q.enque(1);
q.enque(2);
q.enque(3);

assert.deepEqual(q.toArray(), [1, 2, 3], 'should fill the queue');

q.deque();

assert.deepEqual(q.toArray(), [2, 3], 'should deque an element');

q.enque(4);

assert.deepEqual(q.toArray(), [2, 3, 4], 'should enque an element');
