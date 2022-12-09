import React from 'react';
import Node from './Node';

class Tree extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const depth = [...Array(3)].map((_, i) => i);
		console.log(depth);
		const tree = depth.map((_, item) => <li key={item}><Node name={item} /></li>)
		return (
		<div>
			<Node name="" />
			<ul>
				{tree}
			</ul>
		</div>
		);
	}
}

export default Tree;
