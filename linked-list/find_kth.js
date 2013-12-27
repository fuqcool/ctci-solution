var List = require('./list.js');

function find_kth(lst, k) {
  var n = lst.head.next;

  var m = n;

  var i;
  for (i = 0; i < k - 1; i++) {
    m = m.next;
  }

  while (m.next) {
    m = m.next;
    n = n.next;
  }

  return n;
}


// tests

var lst = new List();

lst.insert(6);
lst.insert(5);
lst.insert(4);
lst.insert(3);
lst.insert(2);
lst.insert(1);

var el = find_kth(lst, 3);

console.assert(el.value === 4, 'should return third to last element');
