import React, { Component } from 'react';
import $ from 'jquery';

class SayHello extends Component {
	constructor(props) {
		super(props);
		this.state = { ahm: 0, srv_rsp: '', srv_add_result: 0 };
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
		let self = this;

		if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
			// IN DEVELOPMENT MODE:
			alert('DEVELOPMENT MODE');
			$.post('say-hello', {}, (d, s) => {
				console.log({ d, s });
				self.setState({ srv_rsp: d['result'] });
			});
		} else {
			// IN PRODUCT MODE
			// MAKE A REAL PATH TO SERVER SIDE API
			alert('PRODUCT MODE');
			$.post('say-hello', {}, (d, s) => {
				console.log({ d, s });
				self.setState({ srv_rsp: d['result'] });
			});
		}
	};

	callAdd = () => {
		function tryParseInt(s, v) {
			if (s == null) return v;
			if (s == '') return v;
			try {
				return parseInt(s);
			} catch {
				return v;
			}
		}

		let self = this;
		let x = tryParseInt($('#txt_x').val(), 0);
		let y = tryParseInt($('#txt_y').val(), 0);
		// debugger;

		$.post('add-numbers', { x, y }, (d, s) => {
			console.log({ d, s });
			self.setState({ srv_add_result: d['result'] });
		});
	};

	render() {
		return (
			<div className="m-5">
				<h1>HELLO FROM REACT</h1>

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
				<br />
				<span>{this.state.srv_rsp}</span>
				<hr />
				<h3>CALL ADD NUMBERS</h3>
				<input id="txt_x" type="number" className="p-2" placeholder="X = ?" />
				<br />
				<input id="txt_y" type="number" className="p-2" placeholder="Y = ?" />
				<br />
				<button className="btn btn-primary m-1" onClick={this.callAdd}>
					CALL REST API ADD
				</button>
				<br />
				<span>[SERVER RESULT]: {this.state.srv_add_result}</span>
				<hr />
			</div>
		);
	}
}

export default SayHello;
