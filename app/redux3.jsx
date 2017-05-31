var redux = require('redux');

var stateDefault = {
	hobbies: [],
	name: 'bob',
	movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var oldReducer = (state = stateDefault, action) => {
	switch(action.type){
		case 'UPDATE_NAME':
			return {
				...state,
				name: action.name
			};

		case 'ADD_HOBBY':
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
				]
			};

		case 'REMOVE_HOBBY':
			return {
				...state,
				hobbies: state.hobbies.filter( (hobby) => hobby.id !== action.id )
			};

		case 'ADD_MOVIE':
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId++,
						movie: action.movie,
						genre: action.genre
					}
				]
			};

		case 'REMOVE_MOVIE':
			return {
				...state,
				movies: state.movies.filter( (movie) => movie.id !== action.id )
			};

		default: 
			return state;
	}
};

var nameReducer = (state = "anonymous", action) => {
	switch(action.type){
		case 'UPDATE_NAME':
			return action.name;
		default:
			return state;
	}
};

var hobbiesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
			];
		case 'REMOVE_HOBBY':
			return state.filter( (hobby) => hobby.id !== action.id );
		default:
			return state;
	}
};

var moviesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					movie: action.movie
				}
			];
		case 'REMOVE_MOVIE':
			return state.filter( (movie) => movie.id !== action.id );
		default:
			return state;
	}
};


//tools and store
var reduxTools = redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f );

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer
});

var store = redux.createStore(reducer, reduxTools);

//unsubscribe and subscribe
var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	console.log(state);
	document.getElementById('app').innerHTML = state.name;

});

//unsubscribe();



store.dispatch({
	type: "ADD_HOBBY",
	hobby: 'running'
});

store.dispatch({
	type: "ADD_HOBBY",
	hobby: 'run fast'
});

store.dispatch({
	type: "ADD_HOBBY",
	hobby: 'swim'
});

store.dispatch({
	type: "ADD_MOVIE",
	movie: 'Captain Fantastic',
	genre: 'Satire'
});

store.dispatch({
	type: "ADD_MOVIE",
	movie: 'Hunt for the Wilderpeople',
	genre: 'Comedy'
});

store.dispatch({
	type: "ADD_MOVIE",
	movie: 'Matrix',
	genre: 'Action'
});

store.dispatch({
	type: "UPDATE_NAME",
	name: 'Zach'
});

store.dispatch({
	type: "REMOVE_HOBBY",
	id: 2
});

store.dispatch({
	type: "REMOVE_MOVIE",
	id: 1
});

store.dispatch({
	type: "UPDATE_NAME",
	name: 'Jimmy Jones'
});
