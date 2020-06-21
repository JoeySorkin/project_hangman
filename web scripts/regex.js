//* TEST VARIABLES

//! CONSTRUCTING THE REGULAR EXPRESSION
let letters = [];
regex_build = [];
function build_regular_expression(length_of_word) {
	regex_build = ['/'];
	for (i = 1; i <= length_of_word; i++) {
		regex_build.push('[a-z]');
	}
	regex_build.push('/g');
}
function build_word(length_of_word) {
	for (i = 0; i < length_of_word; i++) {
		letters[i] =
			'<span onclick = "span_click(' + i + ')" id="letter' + i + '">?</span>';
	}
	return letters.join('');
}
function edit_word(letter, number) {
	letters.splice(
		number,
		1,
		'<span onclick = "span_click(' +
			number +
			')" id="letter' +
			number +
			'">' +
			letter +
			'</span>'
	);
}

// //* USING THE REGULAR EXPRESSION

function render_word() {
	document.getElementById('word').innerHTML = letters.join('');
}
function span_click(span_num) {
	edit_word(commonletter, span_num);
	render_word();

	regex_build.splice(span_num, 1, '[' + commonletter + ']');
	for (i = 0; i < letter_set.length; i++) {
		if (letter_set[i] == commonletter) {
			letter_set.splice(i, 1);
		}
	}
	main_string = main_string.match(eval(regex_build.join('')));

	updateCommon();
}
