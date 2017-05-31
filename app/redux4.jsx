var redux = require('redux');
var axios = require('axios');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();



//unsubscribe and subscribe
var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	//document.getElementById('app').innerHTML = state.name;
	if (state.map.isFetching){
		document.getElementById('app').innerHTML = 'loading...';
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">Link</a>';
	}

});


//unsubscribe();

//actions.fetchLocation();
store.dispatch(actions.fetchLocation());

store.dispatch(actions.addHobby('running'));
store.dispatch(actions.addHobby('swim'));
store.dispatch(actions.addHobby('swimmmmmm'));

store.dispatch(actions.removeHobby(4));

store.dispatch(actions.addMovie('Star Wars', 'Action'));
store.dispatch(actions.addMovie('Revolver', 'Action'));

store.dispatch(actions.removeMovie(1));
store.dispatch(actions.addMovie('Indiana Jones', 'Action'));

store.dispatch(actions.changeName('Ricky Baker'));

store.dispatch(actions.addMovie('Star Wars', 'Action'));