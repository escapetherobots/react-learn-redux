var redux = require('redux');
console.log('redux2');

//pure function as argument to the createStore method
//this is a reducer
//the reducer takes the existing state and returns a new state
var reducer = ( state = {name: 'Anonymous'}, action ) => {
	//use state obj argument or default state obj
	//state = state || {name: 'Anonymous'};
	return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState: ', currentState);