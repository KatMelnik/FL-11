function getMin(...theArgs) {
	let minResult = arguments[0];
	for (let i = 0; i < theArgs.length; i++) {
		if (arguments[i] < minResult) {
			minResult = arguments[i];
		}
	}
	return minResult;
}
console.log('getMin(3,0,-3);//=>',getMin( 3,0,-3));