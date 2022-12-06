import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class Node extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<Card className="text-center">
			<Card.Header>
				root
			</Card.Header>
			<Card.Body>
				<Form.Control type="text" placeholder="k"/>
			</Card.Body>
		</Card>
		);
	}
}

export default Node;
