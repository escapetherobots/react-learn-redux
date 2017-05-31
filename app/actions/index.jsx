var axios = require('axios');




//======================================
// name action generater

export var changeName = (name) => {
	return {
		type: 'UPDATE_NAME',
		name: name
	};
};




//======================================
// hobby action generator
// condensed es6 approach

export const addHobby = hobby => ({type: 'ADD_HOBBY', hobby});
export const removeHobby = id => ({type: 'REMOVE_HOBBY', id});


//======================================
// movie action generators
export var addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title,
		genre
	}
	
};

export var removeMovie = (num) => {
	return {
		type: 'REMOVE_MOVIE',
		id: num
	}
	
};


//======================================
// location action generator:
export var startLocationFetch = () => {
	return {
		type: "START_LOCATION_FETCH",

	};
};

export var completeLocationFetch = (url) => {
	return {
		type: "COMPLETE_LOCATION_FETCH",
		url
	};
};

export var fetchLocation = () => {
	return (dispatch, getState) => {

		// must use thunk to handle these function calls as objects
		// don't call store from here, call it from the dispatch page
		dispatch(startLocationFetch());

		axios.get('http://ipinfo.io').then(function(res){
			var loc = res.data.loc;
			var baseUrl = 'http://maps.google.com?q=';

			dispatch(completeLocationFetch(baseUrl+loc));
		});


	};

	
}