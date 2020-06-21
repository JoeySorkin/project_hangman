const promptbox = document.getElementById('promptbox');
const does_letter = document.getElementById('letter');
promptbox.style.display = 'none';
function updateCommon() {
	commonletter = loop_array(main_string)[0];
	does_letter.innerText = commonletter;
}
document.getElementById('word_hat_one').style.display = 'none';

//1st - Prompt user for word length
let readyforbuild = false;
length = 1;
function find_length(num) {
	if (length + num >= 1 && length + num <= 14) {
		length += num;
	}
	document.getElementById('word_length_content').innerHTML = length;
}

//2nd - Once the user is prompted, replace the length selector with the text
const length_class = document.getElementsByClassName('length');
function remove_numselector() {
	for (let i = 0; i < length_class.length; i++) {
		length_class[i].remove(length_class[i]);
		length_class[i].style.display = 'none';
	}
	document.getElementById('word_hat_two').style.display = 'none';
	document.getElementById('word_hat_one').style.display = 'block';
	promptbox.style.display = 'block';
	readyforbuild = true;

	//3rd - Build and display the word
	document.getElementById('word').innerHTML = build_word(length);
	main_string = eval('str' + length);
	build_regular_expression(length);
	updateCommon();
}

//4th - find common letter
function rungame(response) {
	if (!letters.join().includes('?')) {
	} else {
		if (response) {
			document.getElementById('contain_yes').innerText =
				'Please click the ? where the letter "' + commonletter + '" is';
		}
		loop_array(main_string)[0];
		update_array(commonletter);
	}
}
