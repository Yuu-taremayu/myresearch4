import React, { useState } from 'react';
import Node from './Node';

class Tree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'root',
			children: []
		}
	}

	addChildren(nodeName, num) {
		let prefix = "";
		if (nodeName === "root") {
			prefix = "children";
		}
		else {
			prefix = nodeName + "-";
		}
		let childrenIndex = [...Array(num).keys()];
		let childrenNode = [...childrenIndex.map((item) => {return { name: prefix + (item + 1).toString(), children: [] }})];
	}

	render() {
		return (
		<div>
			<Node name={this.state.name} children={this.state.children} addChildren={this.addChildren} />
		</div>
		);
	}
}

export default Tree;
