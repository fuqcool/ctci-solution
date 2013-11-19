/**
 * GIVEN: a string
 * RETURNS: whether the given string has unique characters
 * EXAMPLES:
 * (is_unique 'a') => true
 * (is_unique 'qwerty') => true
 * (is_unique 'fuqcool') => false
 */
function isUnique(s) {
  var SET_SIZE = 255;
  var set = new Array(SET_SIZE);

  var i;
  for (i = 0; i < SET_SIZE; i++) {
    set[i] = false;
  }

  for (i = 0; i < s.length; i++) {
    var code = s.charCodeAt(i);
    if (set[code]) {
      return false;
    }

    set[code] = true;
  }

  return true;
}


console.assert(isUnique('a'), 'single character is unique');
console.assert(isUnique('abxcerkq'), 'unique string');
console.assert(!isUnique('abcerabq'), 'non-unique string');

console.log('correct');
