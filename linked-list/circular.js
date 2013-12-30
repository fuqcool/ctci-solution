var List = require('./list.js');

function circular(lst) {
  var fast, slow;

  slow = fast = lst.head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

var lst = new List();

lst.insert('f');
lst.insert('e');
lst.insert('d');
lst.insert('c');
lst.insert('b');
lst.insert('a');

console.assert(!circular(lst), 'should not be a circular list');

var node = lst.search('f');
node.next = lst.search('c');

console.assert(circular(lst), 'should be a circular list');
