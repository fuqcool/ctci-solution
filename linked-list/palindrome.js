var List = require('./list.js');

/**
 * GIVEN: a list
 * RETURNS: whether given list is a palindrome
 * EXAMPLES: see tests
 */
function palindrome(lst) {
  var p = lst.head.next;
  var q = lst.head;

  while (q.next) q = q.next;

  while (p !== q && q.next !== p) {
    if (p.value !== q.value) {
      return false;
    } else {
      p = p.next;
      q = q.prev;
    }
  }

  return true;
}

var lst = new List();

lst.insert('a');
lst.insert('c');
lst.insert('b');
lst.insert('f');
lst.insert('b');
lst.insert('c');
lst.insert('a');

console.assert(palindrome(lst), 'should be a palindrome');

lst = new List();

lst.insert('a');
lst.insert('c');
lst.insert('g');
lst.insert('f');
lst.insert('b');
lst.insert('e');
lst.insert('a');

console.assert(!palindrome(lst), 'should not be a palindrome');
