import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class Node extends React.Component {
	constructor(props) {
		super(props);
		if (props.name === '') {
			this.state = {
				nodeName: 'root'
			};
		}
		else {
			this.state = {
				nodeName: props.name
			};
		}
	}

	render() {
		return (
		<div className="node">
			<Card className="text-center">
				<Card.Header>{this.state.nodeName}</Card.Header>
				<Card.Body className="node-parameter">
					<Form.Control className="threshold" type="text" size="sm" placeholder="k"/>
					<Form.Control className="split-num" type="text" size="sm" placeholder="n"/>
				</Card.Body>
			</Card>
		</div>
		);
	}
}

export default Node;
