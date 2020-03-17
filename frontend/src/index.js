import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SayHello from './components/SayHello';

import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import 'jquery';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/hello">Hello Page</Link>
				</li>
			</ul>
			<Route exact path="/" component={App} />
			<Route path="/hello" component={SayHello} />
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
