/**
 * GIVEN: two strings
 * RETURNS: true if one string is the permutation of the other
 * EXAMPLES:
 * isPermutation('abcde', 'ecdba') => true
 * isPermutation('abcde', 'cbafg') => false
 */

function isPermutation(s1, s2) {
  var set = new Array(255);
  var i;

  for (i = 0; i < 255; i++) set[i] = 0;

  for (i = 0; i < s1.length; i++) {
    set[s1.charCodeAt(i)]++;
  }

  for (i = 0; i < s2.length; i++) {
    set[s2.charCodeAt(i)]--;
  }

  for (i = 0; i < 255; i++) {
    if (set[i] !== 0) {
      return false
    }
  }

  return true;
}

console.assert(isPermutation('abcde', 'ecdba'), 'should be permutation of each other');
console.assert(!isPermutation('abcde', 'cbafg'), 'should not be permutation');

console.assert('correct');