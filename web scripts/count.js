let letter_set = [
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

function loop_array(string) {
	common_array = [];
	for (let i = 0; i < letter_set.length; i++) {
		common_array.push(loop_regex(letter_set[i], string));
	}

	let greatest = ['a', 0];
	for (let i = 0; i < common_array.length; i++) {
		if (common_array[i][1] > greatest[1]) {
			greatest = common_array[i];
		}
	}
	return greatest;
}

function loop_regex(character, string) {
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

function update_array(remove_letter) {
	for (var i = letter_set.length - 1; i >= 0; i--) {
		if (letter_set[i] === remove_letter) {
			letter_set.splice(i, 1);
		}
	}
}
