var List = require('./list.js');
var assert = require('assert');

function add(lst1, lst2) {
  var p = lst1.head;
  var q = lst2.head;
  var lst = new List();
  m = lst.head;

  var carry = 0;

  while (p.next) {
    p = p.next;
    q = q.next;

    var result = p.value + q.value;
    remain = result % 10;

    m.next = { next: null, value: remain + carry };
    m = m.next;

    carry = result > 9 ? 1 : 0;
  }

  if (carry) {
    m.next = { next: null, value: carry };
  }

  return lst;
}

// tests

var lst1 = new List();
lst1.insert(6);
lst1.insert(1);
lst1.insert(7);

var lst2 = new List();
lst2.insert(8);
lst2.insert(9);
lst2.insert(5);

var result = add(lst1, lst2);

assert.deepEqual(result.toArray(), [2, 1, 5, 1], 'should return result as a linked list');
