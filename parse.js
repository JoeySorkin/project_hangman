var words = require("an-array-of-english-words");

//= /^[a-z][a][a-z]$/;
slim_set = words;

/*!CONTROL REGEX!
[a-z] = any letter
[^a] = any letter but a
*/
function regex(reg) {
  //YES
  //slimset
  slim_set = slim_set.filter(d => reg.test(d));
}
function guess() {
  str = slim_set.join("");

  //common letters
  let max = 0; // variable to store the number of appearances of the max char so far
  let maxChars = []; //array to store to the max char(s) in case of multiple characters
  const charCount = new Array(26).fill(0); // initialize a fixed sized array and fill it with zeros
  // iterate over all the characters and add the count to charCount - just like a hash map
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i) - 97; //97 is ASCII value of 'a'
    charCount[ch]++;
    if (charCount[ch] > max) {
      maxChars = [str.charAt(i)];
      max = charCount[ch];
    } else if (charCount[ch] === max) maxChars.push(str.charAt(i));
  }
  return maxChars.toString(); // print the f
}

regex(/^[c][a-z][t]$/);
console.log(guess());
console.log(slim_set);
