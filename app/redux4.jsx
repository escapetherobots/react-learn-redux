var redux = require('redux');
var axios = require('axios');

// name reducers & action generators
//======================================
// name reducer
var nameReducer = (state = "anonymous", action) => {
	switch(action.type){
		case 'UPDATE_NAME':
			return action.name;
		default:
			return state;
	}
};

// name action generater
var changeName = (name) => {
	return {
		type: 'UPDATE_NAME',
		name: name
	};
};

// hobby reducers & action generators
//======================================
var nextHobbyId = 1;
// hobby reducer
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

// hobby action generator

const addHobby = hobby => ({type: 'ADD_HOBBY', hobby});
const removeHobby = id => ({type: 'REMOVE_HOBBY', id});


// movies reducers & action generators
//======================================
var nextMovieId = 1;
// movie reducer
var moviesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_MOVIE':
			console.log('adding movie');
			return [
				...state,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre

				}
			];
		case 'REMOVE_MOVIE':
			console.log('removing movie');
			return state.filter( (movie) => movie.id !== action.id );
		default:
			return state;
	}
};

// movie action generators
var addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title,
		genre
	}
	
};

var removeMovie = (num) => {
	return {
		type: 'REMOVE_MOVIE',
		id: num
	}
	
};


// map reducers & action generators
//======================================

// map reducer
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch(action.type){
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined

			};

		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url
			};

		default: 
			return state;
	}

};

// action generator:
var startLocationFetch = () => {
	return {
		type: "START_LOCATION_FETCH",

	};
};

var completeLocationFetch = (url) => {
	return {
		type: "COMPLETE_LOCATION_FETCH",
		url
	};
};

var fetchLocation = () => {
	store.dispatch(startLocationFetch());

	axios.get('http://ipinfo.io').then(function(res){
		var loc = res.data.loc;
		var baseUrl = 'http://maps.google.com?q=';

		store.dispatch(completeLocationFetch(baseUrl+loc));
	});

	
}


//tools and store
var reduxTools = redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f );

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer
});

var store = redux.createStore(reducer, reduxTools);

//unsubscribe and subscribe
var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	//document.getElementById('app').innerHTML = state.name;
	if (state.map.isFetching){
		document.getElementById('app').innerHTML = 'loading...';
	} else if (state.map.url) {
		console.log(state.map.url);
		document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">Link</a>';
	}

});

//unsubscribe();

fetchLocation();

store.dispatch({
	type: "ADD_HOBBY",
	hobby: 'running'
});

store.dispatch({
	type: "ADD_HOBBY",
	hobby: 'run fast'
});

store.dispatch(addHobby('swim'));
store.dispatch(addHobby('swimmmmmm'));
store.dispatch(removeHobby(4));

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

store.dispatch(removeMovie(1));
store.dispatch(addMovie('Indiana Jones', 'Action'));

store.dispatch(changeName('Ricky Baker'));