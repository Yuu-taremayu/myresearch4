import React from 'react';

class Node extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div className="node">
			<div className="node-name">
				<p>name</p>
			</div>
			<div className="node-parameter">
				<p>para</p>
			</div>
		</div>
		);
	}
}

export default Node;
