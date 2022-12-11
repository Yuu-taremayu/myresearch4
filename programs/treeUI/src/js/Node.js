import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class Node extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nodeName: props.name,
			n: 0,
			k: 0
		};
	}

	render() {
		//this.props.addChildren(this.state.nodeName, 3);
		this.props.addChildren("children1", 3);
		return (
		<div className="node">
			<Card className="text-center">
				<Card.Header>{this.state.nodeName}</Card.Header>
				<Card.Body className="node-parameter">
					<Form.Control
						className="threshold"
						type="text"
						size="sm"
						placeholder="k"
						onChange={(e) => this.setState({k: e.target.value})}
					/>
					<Form.Control
						className="split-num"
						type="text"
						size="sm"
						placeholder="n"
						onChange={(e) => this.setState({n: e.target.value})}
					/>
				</Card.Body>
			</Card>
		</div>
		);
	}
}

export default Node;
