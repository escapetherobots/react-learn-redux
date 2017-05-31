var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var Test = require('Test');


//object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App Styles
require('style!css!sass!AppStyles');

ReactDOM.render( 
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Test}/>
			<Route path="countdown" component={Test} />
		</Route>
	</Router>,
	document.getElementById('app')
);

// require('./redux-example.jsx');
//require('./redux-example2.jsx');
//require('./redux-todo-example.jsx');
//require('./redux3.jsx');
require('./redux4.jsx');