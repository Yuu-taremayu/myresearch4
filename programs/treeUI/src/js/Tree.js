import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Node from './Node';
import { setNodeName } from './treeSlice';
import { store } from './store';

const Tree = (props) => {
	//const dispatch = useDispatch();
	//store.dispatch(setNodeName("root"));
	//const name = useSelector((state) => state.nodeName);
	//console.log(name);
	return (
		<div className="tree">
			<Node nodeName={'root'}/>
		</div>
	);
}

export default Tree;
