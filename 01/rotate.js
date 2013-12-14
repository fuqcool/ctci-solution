/**
 * GIVEN: a N*N matrix, represented in a two-demension array.
 * EFFECT: rotate the given matrix by 90 degrees, clockwise.
 * EXAMPLES: see tests
 */
function rotate(a) {
  var i, j, tmp, first, last;
  var n = a.length;

  for (i = 0; i < n/2; i++) {
    first = i;
    last = n - i - 1;

    for (j = first; j < last; j++) {
      tmp = a[first][j];
      a[first][j] = a[n-j-1][first];
      a[n-j-1][first] = a[last][n-j-1];
      a[last][n-j-1] = a[j][last];
      a[j][last] = tmp;
    }
  }
}


// test
var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var result = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

rotate(a);

console.assert(JSON.stringify(a) === JSON.stringify(result), "should rotate the matrix by 90 degrees");
