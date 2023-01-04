import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Node from './Node';
import { store } from './store';

const Tree = (props) => {
	const node = props.node;
	let stack = [];
	stack.push(node);
	while(stack.length) {
		for (let j in stack[0]) {
			if (stack[0][j].constructor === Object
			&& !stack[0][j].length) {
				stack.push(stack[0][j]);
			}
			else if (Array.isArray(stack[0][j])) {
				for (let i = 0; i < stack[0][j].length; i++) {
					stack.push(stack[0][j][i]);
				}
			}
			else {
				console.log(`${j} : ${stack[0][j]}`);
			}
		}
		stack.shift();
	}
	return (
	<div>
		<div className="tree-width"><Node key={node.nodeName} node={node} /></div>
			<div className="tree-depth">
				{node.children.map((item) => <Tree node={item} />)}
			</div>
	</div>
	);
}

export default Tree;
