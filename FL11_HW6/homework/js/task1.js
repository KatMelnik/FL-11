let a1, a2, b1, b2, c1, c2;
a1 = +prompt('Enter coordinate X for point A', '');
a2 = +prompt('Enter coordinate Y for point A', '');
b1 = +prompt('Enter coordinate X for point B', '');
b2 = +prompt('Enter coordinate Y for point B', '');
c1 = +prompt('Enter coordinate X for point C', '');
c2 = +prompt('Enter coordinate Y for point C', '');
let divHalf = 2;
if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
	console.log('Input Error. Please, enter only number.'); 
} else if ((a1 + b1)/divHalf===c1 && (a2 + b2)/divHalf===c2) {
	console.log(true); 
} else {
	console.log(false); 
}
