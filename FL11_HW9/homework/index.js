function getNumbers(str){
	let numArr = [];
	let strArr = str.split('');
	for (let i = 0 ; i < str.length; i++) {
		if(!isNaN(parseInt(strArr[i]))){
			numArr.push(parseInt(strArr[i]));
        }
	}
	return numArr;
}
/*console.log(getNumbers('n1um3ber95'));*/
/*console.log(getNumbers('string'));*/

function findTypes(){
	let countObj = 0;
	let countNum = 0;
	let countStr = 0;
	let countBool = 0;
	let countUnd = 0;
	for (let i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] === 'object'){
			countObj =+ 1;
		}else if(typeof arguments[i] === 'number'){
			countNum =+ 1;
		}else if (typeof arguments[i] === 'string'){
			countStr =+ 1;
		}else if (typeof arguments[i] === 'boolean'){
			countBool =+ 1;
		}else if (typeof arguments[i] === 'undefined'){
			countUnd =+ 1;
		}
	}
	return `'object': ${countObj}, 'number': ${countNum}, 'string': ${countStr},+
	 'boolean': ${countBool}, 'undefined': ${countUnd}`;
}
/*console.log(findTypes('number'));/
/*console.log(findTypes(null, 5, 'hello',undefined, true));*/

function executeforEach(arr, myFunc) {
	for (let i = 0; i < arr.length; i++) {
		myFunc(arr[i]);
	}
}
/*executeforEach([1,2,3], function(el) { console.log(el) });*/

function mapArray (arr, myFunc){
  let newArr = [];
  executeforEach(arr, function(x) {
    newArr.push(myFunc(x));
  });
  return newArr;
}
/*console.log(mapArray([2, 5, 8], function(el) { return el + 3} ));*/

function filterArray(arr, myFunc){
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if(myFunc(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
/*console.log (filterArray([2, 5, 8], function(el) { return el > 3 })); */

function showFormattedDate(data){
	let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let year = data.getFullYear();
	let month = data.getMonth();
	let day = data.getDate();
	return `Date: ${monthArr[month]} ${day} ${year}`;
}
/*console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));*/

function canConvertToDate(d) {
	let checkDate = new Date(d);
	return !isNaN(Date.parse(checkDate));
}
//console.log(canConvertToDate('2016-13-18T00:00:00'));
//console.log(canConvertToDate('2016-03-18T00:00:00'));

function daysBetween(date1, date2){
	const MILSEC = 1000;
	const SEC = 3600;
	const HOUR = 24;
    let sec = MILSEC * SEC * HOUR;
    return Math.round(Math.abs(date2 - date1) / sec);
}
/*console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));*/

let people = 
[
	{
		'_id': '5b5e3168c6bf40f2c1235cd6',
		'index': 0,
		' birthday ': '2016-03-18T00:00:00',
		'eyeColor': 'green',
		'name': 'Stein',
		'favoriteFruit': 'apple'
	},
	{
		'_id': '5b5e3168e328c0d72e4f27d8',
		'index': 1,
		' birthday ': '1991-02-11T00:00:00',
		'eyeColor': 'blue',
		'name': 'Cortez',
		'favoriteFruit': 'strawberry'
	},
	{
		'_id': '5b5e3168cc79132b631c666a',
		'index': 2,
		' birthday ': '1984-04-17T00:00:00',
		'eyeColor': 'blue',
		'name': 'Suzette',
		'favoriteFruit': 'apple'
	},
	{
		'_id': '5b5e31682093adcc6cd0dde5',
		'index': 3,
		' birthday ': '1994-04-17T00:00:00',
		'eyeColor': 'green',
		'name': 'George',
		'favoriteFruit': 'banana'
	}
]

function getAmountOfAdultPeople(people) {
	let age18 = 6570;
	let arr = filterArray(
		people,
		function (el) {
			if (daysBetween(new Date(el[' birthday ']), new Date()) > age18) {
				return daysBetween(new Date(el[' birthday ']), new Date());
				}
		});
	return arr.length;
}
/*console.log(getAmountOfAdultPeople(data)); */

function keys (object) {
	let arr = [];
	for ( let key in object ) {
		if (object.hasOwnProperty(key)) {
			arr.push(key);
		}
	}  
	return arr;
}
/*console.log (keys({keyOne: 1, keyTwo: 2, keyThree: 3}));*/

function values (value) {
	let arr = [];
	for ( let key in value ) {
		if (value.hasOwnProperty(key)) {
			arr.push(key);
		}
	}  
	return arr;
}
/*console.log (values({keyOne: 1, keyTwo: 2, keyThree: 3}));*/
