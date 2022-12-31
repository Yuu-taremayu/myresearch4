'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function Tree(props) {
	var node;
	Array.isArray(props.node) ? node = props.node : node = [props.node];
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
	return _react2.default.createElement(
		'div',
		{ className: 'tree-depth' },
		_react2.default.createElement(
			'div',
			{ className: 'tree-width' },
			node.map(function (item) {
				return _react2.default.createElement(_Node2.default, { key: item.nodeName, node: item });
			})
		),
		node.map(function (item) {
			return item.children.length != 0 ? _react2.default.createElement(Tree, { node: item.children }) : null;
		})
	);
};

exports.default = Tree;