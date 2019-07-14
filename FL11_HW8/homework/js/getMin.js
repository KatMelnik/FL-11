function getMin(...theArgs) {
	var minRezult = arguments[0];
	for (var i = 0; i < theArgs.length; i++) {
		if (arguments[i] < minRezult) {
			minRezult = arguments[i];
        }
	}
	return minRezult;
}
console.log('getMin(3,0,-3);//=>',getMin( 3,0,-3));