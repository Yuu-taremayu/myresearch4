import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Node from './Node';
import { setNodeName } from './treeSlice';
import { store } from './store';

const Tree = (props) => {
	console.log(store.getState());
	var a;
	if (useSelector(state => state.tree.children).length === 0) {
		a = <p>bbb</p>;
	}
	else {
	var a = <p>aaa</p>;
	}
	return (
		<div className="tree">
			<Node />
			{a}
		</div>
	);
}

export default Tree;
