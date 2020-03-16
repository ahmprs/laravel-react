import React, { Component } from 'react';

class SayHello extends Component {
	constructor(props) {
		super(props);
		this.state = { ahm: 0 };
	}

	inc = () => {
		let bhm = this.state.ahm + 1;
		this.setState({ ahm: bhm });
	};

	render() {
		return (
			<React.Fragment>
				<button className="btn btn-primary" onClick={this.inc}>
					Press Me
				</button>
				<br />
				<span>Hello React {this.state.ahm}</span>
			</React.Fragment>
		);
	}
}

export default SayHello;
