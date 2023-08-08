// Given two strings s and t, return true if t is an anagram of s, and false otherwise. Try this in a language you're not comfortable with!

function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagram('barbie', 'oppenheimer'));

console.log(isAnagram('race', 'care'));
