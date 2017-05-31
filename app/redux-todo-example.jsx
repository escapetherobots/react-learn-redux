var redux = require('redux');

console.log('redux-todo example');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: []
};


// title: reducer arrow function!!!
// args: object for state, and some action;
// returns: state;
var reducer = (state = stateDefault, action) => {

	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
			//return new state object
			return {
				...state,
				searchText: action.searchText
			};

		case 'UPDATE_AGE':
			return {
				...state,
				age: action.age
			};	
		default:
			return state;
	}

};
// store the state
// define composed extensions
var reduxTools = redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f );

var store = redux.createStore(reducer, reduxTools);
// subscribe to changes
//store.getState();
//store.subscribe();

// subscribes to changes made on the state/store
// subsribe also returns a function that lets you unsubscribe (closure)
var unsubscribe = store.subscribe( () => {
	var state = store.getState();

	console.log('subscribed state searchText: ', state.searchText );
	console.log('subscribed state value: ', state );
	document.getElementById('app').innerHTML = state.searchText;
});

//unsubscribe();

var action = {
	type: 'CHANGE_NAME',
	name: 'Zach'
};

var actionSearchText = {
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Cat'
}


store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'jimbo'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'marty'
});