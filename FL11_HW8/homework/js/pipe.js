function addOne(x){ 
	return x + 1; 
}
function pipe (num, ...theFunc){
	let numResult = num;
	for (let i = 0; i < theFunc.length; i++) {
		numResult = theFunc[i](numResult);
	}
	return numResult;
}
console.log('pipe(1, addOne)//=>',pipe(1, addOne));
console.log('pipe(1, addOne,addOne)//=>',pipe(1, addOne, addOne)); 


