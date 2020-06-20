document.getElementById('word_hat_one').style.display = 'none';
//1st - Prompt user for word length
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
}

//3rd - Build and display the word
build_word(length);
