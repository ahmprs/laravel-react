import React, { Component } from 'react';
import $ from 'jquery';

class SayHello extends Component {
	constructor(props) {
		super(props);
		this.state = { ahm: 0 };
	}

	inc = () => {
		let bhm = this.state.ahm + 1;
		this.setState({ ahm: bhm });
	};

	sendRestRequest = () => {
		// IMPORTANT NOTE:(only in design mode)
		//
		// since I have configured a proxy setting in `package.json`
		// each request which is sent via post method is routed to
		// http://localhost/8000/api
		// thus instead of targeting the server script with exact
		// absolute path http://localhost/8000/api/say-hello
		// we just call it as follows:

		// $.post('say-hello', {}, (d, s) => {
		// 	console.log({ d, s });
		// });

		$.post('say-hello', {}, (d, s) => {
			console.log({ d, s });
		});
	};

	render() {
		return (
			<div className="m-5">
				<button className="btn btn-primary mb-1" onClick={this.inc}>
					Press Me
				</button>
				<br />
				<span>Click Count: {this.state.ahm}</span>
				<hr />
				<h3>REST API</h3>
				<span>http://localhost:8000/api/say-hello</span>
				<br />
				<button className="btn btn-primary m-1" onClick={this.sendRestRequest}>
					CALL REST API
				</button>
			</div>
		);
	}
}

export default SayHello;
