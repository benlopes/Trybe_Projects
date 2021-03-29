function isPal(word){
	
	let isPal = false;
	
	// transf. str to arr; reverse the arr; transf. back to str
	// transf. string (S) p/ array (A); reverte A; volta pra S
	let arrWord = ((word.split('')).reverse()).join('');

	if (word === arrWord) {
		isPal = true;
	}
	return isPal;
}

/*console.log('arara', isPal('arara'));
console.log('desenvolvimento', isPal('desenvolvimento'));
console.log('ovo', isPal('ovo'));*/