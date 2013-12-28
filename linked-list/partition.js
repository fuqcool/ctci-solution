var List = require('./list.js');
var assert = require('assert');

/**
 * GIVEN: a linked list and a number
 * EFFECT: partition the given list so that all elements that are less than x
 *         comes before elements that are greater than or equal to x
 * EXAMPLES: see tests
 */
function partition(lst, x) {
  var tmp;
  var node = lst.head.next;

  while (node.next) {
    if (node.next.value < x) {
      tmp = node.next;
      node.next = node.next.next;

      tmp.next = lst.head.next;
      lst.head.next = tmp;
    } else {
      node = node.next;
    }
  }
}


// tests

var lst = new List();

lst.insert(7);
lst.insert(9);
lst.insert(3);
lst.insert(5);
lst.insert(11);
lst.insert(4);
lst.insert(2);

partition(lst, 6);

assert.deepEqual(lst.toArray(), [3, 5, 4, 2, 11, 9, 7], 'should partition the list');
