var List = require('./list.js');
var assert = require('assert');

/**
 * GIVEN: two numbers represented by a list of digits
 * RETURNS: the sum of the given numbers represented by a list of digits
 * EXAMPLES: see tests
 */
function add(lst1, lst2) {
  var v1, v2, p = lst1.head, q = lst2.head;


  // go to the end of the list
  while (p.next) p = p.next;
  while (q.next) q = q.next;

  var lst = new List();

  var carry = 0;

  while (p !== lst1.head || q !== lst2.head || carry) {
    var v1 = (p !== lst1.head) ? p.value : 0;
    var v2 = (q !== lst2.head) ? q.value : 0;
    var result = v1 + v2;

    remain = result % 10;

    // insert in front of the list
    var node = { next: null, value: remain + carry };
    node.next = lst.head.next;
    lst.head.next = node;

    carry = result > 9 ? 1 : 0;

    (p !== lst1.head) && (p = p.prev);
    (q !== lst2.head) && (q = q.prev);
  }

  return lst;
}

// tests

var lst1 = new List();
lst1.insert(6);
lst1.insert(1);
lst1.insert(7);

var lst2 = new List();
lst2.insert(1);
lst2.insert(8);
lst2.insert(9);
lst2.insert(5);


var result = add(lst1, lst2);

assert.deepEqual(result.toArray(), [6, 6, 9, 7], 'should return result as a linked list');
