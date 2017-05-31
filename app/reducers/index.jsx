var redux = require('redux');


//======================================
// name reducer
export var nameReducer = (state = "anonymous", action) => {
	switch(action.type){
		case 'UPDATE_NAME':
			return action.name;
		default:
			return state;
	}
};


//======================================
export var nextHobbyId = 1;
// hobby reducer
export var hobbiesReducer = (state = [], action) => {
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



//======================================
export var nextMovieId = 1;
// movie reducer
export var moviesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre
				}
			];
		case 'REMOVE_MOVIE':
			return state.filter( (movie) => movie.id !== action.id );
		default:
			return state;
	}
};


//======================================

// map reducer
export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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