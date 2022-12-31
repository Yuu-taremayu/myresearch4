import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Node from './Node';
import { store } from './store';

const Tree = (props) => {
	var node;
	Array.isArray(props.node) ? 
		node = props.node
		: node = [props.node];
	//console.log(node);
	/*
	return (
		<div className="tree-depth">
			{node.length != 0 ?
			(
				node.map(item =>
				<Node key={item.nodeName} node={item} />
				)
			) : (
				null
			)}
			{Array.isArray(node) ? 
			(
				<div className="tree-width">
					<Tree node={node.children} />
				</div>
			) : (
				null
			)}
		</div>
	);*/
	return (
		<div className="tree-depth">
			<div className="tree-width">
			{node.map(item =>
				<Node key={item.nodeName} node={item} />)}
			</div>
			{node.map(item => item.children.length != 0 ?
				<Tree node={item.children} />
				:null)
			}
		</div>
	);
}

export default Tree;
