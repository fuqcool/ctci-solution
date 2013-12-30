var assert = require('assert');

function List() {
  this.head = this.makeNode(null);
}

List.prototype.makeNode = function (value) {
  return {
    prev: null,
    next: null,
    value: value
  };
};

List.prototype.insert = function (value) {
  var node = this.makeNode(value);

  node.next = this.head.next;
  node.prev = this.head;

  if (this.head.next) {
    this.head.next.prev = node;
  }
  this.head.next = node;
};

List.prototype.search = function (value) {
  var node = this.head.next;

  while (node && node.value !== value) {
    node = node.next;
  }

  return node;
};

List.prototype.remove = function (value) {
  var node = this.search(value);

  if (node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
};

List.prototype.toArray = function () {
  var node = this.head.next;

  var result = [];

  while (node) {
    result.push(node.value);
    node = node.next;
  }

  return result;
};

module.exports = List;


// tests

var lst = new List();

lst.insert(4);
lst.insert(3);
lst.insert(2);

assert.deepEqual(lst.toArray(), [2, 3, 4], 'should construct a list');

var n = lst.search(3);
assert.equal(n.value, 3, 'should find first element with value 3');

var m = lst.search(5);
assert.equal(m, null, 'should return null if not found');

lst.remove(3);
assert.deepEqual(lst.toArray(), [2, 4], 'should remove first element with value 3');
