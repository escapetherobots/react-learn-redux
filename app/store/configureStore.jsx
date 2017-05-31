var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');
//======================================

export var configure = () => {
	//tools and store
	var reduxTools = redux.compose(
		redux.applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f 
	);

	var reducer = redux.combineReducers({
		name: nameReducer,
		hobbies: hobbiesReducer,
		movies: moviesReducer,
		map: mapReducer
	});

	var store = redux.createStore(reducer, reduxTools);

	return store;
};