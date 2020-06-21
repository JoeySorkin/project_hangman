//* TEST VARIABLES

//! CONSTRUCTING THE REGULAR EXPRESSION
let letters = [];

function build_regular_expression(length_of_word) {
	regex_build = '^';
	for (i = 1; i <= length_of_word; i++) {
		regex_build = regex_build + '[a-z]';
	}
	regex_build = regex_build + '$';
}
function build_word(length_of_word) {
	for (i = 0; i < length_of_word; i++) {
		letters[i] = '?';
	}
	return letters.join('');
}
function edit_word(letter, number) {
	letters.splice(number - 1, 1, letter);
}

build_regular_expression(4);
// //* USING THE REGULAR EXPRESSION
