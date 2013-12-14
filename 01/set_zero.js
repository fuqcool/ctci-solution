/**
 * GIVEN: a matrix which is represented as a two-dimension array;
 *        the dimensions of the matrix
 * EFFECT: if element is 0, set its column and row elements to 0
 * EXAMPLES: see tests
 */
function set_zero(a, m, n) {
  var rows = [];
  var cols = [];
  var i, j, k;

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (a[i][j] === 0) {
        if (!cols[j]) {
          for (k = 0; k < m; k++) a[k][j] = 0;
          cols[j] = true;
        }

        rows[i] = true;
      }

      if ((j === n - 1) && rows[i]) {
        for (k = 0; k < n; k++) a[i][k] = 0;
      }
    }
  }
}


// tests
var a1 = [
  [1, 2, 3],
  [0, 4, 5],
  [6, 0, 7]
];

set_zero(a1, 3, 3);

console.assert(JSON.stringify(a1) ===
               JSON.stringify([[0, 0, 3], [0, 0, 0], [0, 0, 0]]),
               "should set row and col to 0")

var a2 = [
  [1, 2, 3],
  [9, 4, 5]
];

set_zero(a2, 2, 3);

console.assert(JSON.stringify(a2) === JSON.stringify([[1, 2, 3], [9, 4, 5]]),
               "should do nothing")
