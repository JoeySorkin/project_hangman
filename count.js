var letter_set = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'l',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

var string = 'carwash';

function loop_array() {
	common_array = [];
	for (let i = 0; i < letter_set.length; i++) {
		common_array.push(loop_regex(letter_set[i]));
	}

	let greatest = ['a', 0];
	for (let i = 0; i < common_array.length; i++) {
		if (common_array[i][1] > greatest[1]) {
			greatest = common_array[i];
		}
	}
	console.log(greatest);
}

function loop_regex(character) {
	char = '/' + character + '/g';
	most_common = ['default', 0];
	// character = /{character}/g`;
	try {
		times_seen = string.match(eval(char)).length;
		// console.log(
		// 	'🟢  Letter: ' + character + 'is in the string ' + r + ' times'
		// );

		most_common[0] = character;
		most_common[1] = times_seen;
	} catch (err) {
		// console.log('🟥  Here is the failed regex:' + character);
	}
	return most_common;
}

loop_array();

//! Regex stuffs
//!  regex.test() returns boolean match
