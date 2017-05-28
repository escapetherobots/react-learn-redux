var redux = require('redux');

console.log('start redux');

//pure functions
function add(a,b){
	return a+b;
}
// what makes it:
	//always return same input based on argument
	// no side effects
	// doesn't change values outside of scope
	// no async requests / or promises



//not a pure function
var a = 3;
function add (b) {
	return a+b;
}	

//not a pure function
var result;
function add(a, b) {
	result = a+b;
	return result;
}

//not a pure function
function add(a,b) {
	return a + b + new Date().getSeconds();
}



function changeProp(obj) {
	//don't return the original object, return a new object:
	return {
		...obj, //get all values from original using the spread operator
		name: 'Jen'
	}

	// obj.name = 'Jen';
	// return obj;
}

var obj1 = {
		name: 'Andrew',
		age: 25,
		pet: 'kitty'
	};

var res = changeProp(obj1);


console.log(res);
console.log(obj1);