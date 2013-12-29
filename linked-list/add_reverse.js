var List = require('./list.js');
var assert = require('assert');

/**
 * GIVEN: two numbers represented by a list of digits, in reverse order
 * RETURNS: the sum of the given numbers represented by a list of digits, in reverse order
 * EXAMPLES: see tests
 */
function add(lst1, lst2) {
  var v1, v2;
  var p = lst1.head.next;
  var q = lst2.head.next;
  var lst = new List();
  m = lst.head;

  var carry = 0;

  while (p || q || carry) {
    var v1 = p ? p.value : 0;
    var v2 = q ? q.value : 0;
    var result = v1 + v2;

    remain = result % 10;

    m.next = { next: null, value: remain + carry };
    m = m.next;

    carry = result > 9 ? 1 : 0;

    p && (p = p.next);
    q && (q = q.next);
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

assert.deepEqual(result.toArray(), [2, 1, 5, 2], 'should return result as a linked list');
