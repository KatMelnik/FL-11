let a, b, c;
a = +prompt('Please, enter side A of triangle (positive number):', '');
b = +prompt('Please, enter side B of triangle (positive number):', '');
c = +prompt('Please, enter side C of triangle (positive number):', '');

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
	console.log('Input Error. Enter only positive number');
} else if (a < b + c && b < a + c && c < a + b) {
	if (a === b && b === c && a === c) {
		console.log('Eequivalent triangle');
	} else if (a === b && a !== c || b === c && b !== a || c === a && c !== b) {
		console.log('Isosceles triangle');
	} else { 
		console.log('Normal triangle');
	} 
} else {
	console.log('Triangle doesn’t exist');
}