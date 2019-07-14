function reverseNumber(n) {
	let numReverse = 0;
	let num = n;
	while (num) {
		numReverse = numReverse * 10;
		numReverse = numReverse + num % 10;
		num = ~~(num / 10);
	}
	return numReverse;
}
console.log('reverseNumber(123);//=>',reverseNumber(123));
console.log('reverseNumber(-456);//=>',reverseNumber(-456));
console.log('reverseNumber(10000);//=>',reverseNumber(10000));