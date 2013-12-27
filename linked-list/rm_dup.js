var List = require('./list.js');
var assert = require('assert');

/**
 * GIVEN: a single linked list
 * EFFECT: remove duplicate element in the given list
 * EXAMPLES: see tests
 */
function removeDuplicates(lst) {
  var node = lst.head.next;

  while (node) {
    var p = node;

    while (p.next) {
      if (p.next.value === node.value) {
        p.next = p.next.next;
      } else {
        p = p.next;
      }
    }

    node = node.next;
  }
}

// tests

var lst = new List();

lst.insert(1);
lst.insert(3);
lst.insert(2);
lst.insert(3);
lst.insert(3);
lst.insert(2);
lst.insert(4);
lst.insert(1);

removeDuplicates(lst);

assert.deepEqual(lst.toArray(), [1, 4, 2, 3], 'should remove duplicates');
