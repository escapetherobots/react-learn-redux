var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({


	render: function(){
		return (
			<div  >
				<nav className="top-bar nav-background" data-responsive-toggle="example-menu" data-hide-for="medium">
					<div className="top-bar-left">
						<ul className="menu" data-hide-for="medium">
							<li className="menu-text">CRUX BOILERPLATE</li>
							<li><IndexLink to="/" activeClassName="active">Test</IndexLink></li>
							
							
			
							
						</ul>
					</div>
					<div className="top-bar-right">
						
					</div>
				</nav>
			</div>
		);
	}

});

module.exports = Nav;