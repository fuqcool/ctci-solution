/**
 * GIVEN: a string
 * RETURNS: replace the spaces with '%20'
 * EXAMPLES:
 * replaceSpace('a b') => 'a%20b'
 * replaceSpace('abc') => 'abc'
 */

function replaceSpace(s) {
  var result = '';

  var i;
  for (i = 0; i < s.length; i++) {
    result += (s[i] === ' ') ? '%20' : s[i];
  }

  return result;
}


console.assert(replaceSpace('abcd') === 'abcd', 'should return the same string');
console.assert(replaceSpace('a  b cd') === 'a%20%20b%20cd', 'should replace spaces');

console.log('correct');
