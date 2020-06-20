const fs = require('fs');

var words = require('an-array-of-english-words');

const result = words.filter(word => word.length === 14);
console.log(result);
fs.writeFile('test.txt', result, err => {
	// throws an error, you could also catch it here
	if (err) throw err;

	// success case, the file was saved
	console.log('array written');
});
