function compress(s) {
  if (!s.length) return s;

  var last = s[0];
  var result = '';
  var count = 1;

  var i;
  for (i = 1; i < s.length; i++) {
    if (s[i] !== last) {
      result += last + count;
      last = s[i];
      count = 1;
    } else {
      count++;
    }
  }

  return result + last + count;
}


console.assert(compress('') === '', 'compress empty string');
console.assert(compress('a') === 'a1', 'compress string with 1 character');
console.assert(compress('aa') === 'a2', 'compress string with 2 characters');
console.assert(compress('aaabbbbcccfuqddd') === 'a3b4c3f1u1q1d3', 'compress long string');

console.log('correct');