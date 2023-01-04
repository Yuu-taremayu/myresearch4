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
	var node = props.node;
	var stack = [];
	stack.push(node);
	while (stack.length) {
		for (var j in stack[0]) {
			if (stack[0][j].constructor === Object && !stack[0][j].length) {
				stack.push(stack[0][j]);
			} else if (Array.isArray(stack[0][j])) {
				for (var i = 0; i < stack[0][j].length; i++) {
					stack.push(stack[0][j][i]);
				}
			} else {
				console.log(j + ' : ' + stack[0][j]);
			}
		}
		stack.shift();
	}
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			{ className: 'tree-width' },
			_react2.default.createElement(_Node2.default, { key: node.nodeName, node: node })
		),
		_react2.default.createElement(
			'div',
			{ className: 'tree-depth' },
			node.children.map(function (item) {
				return _react2.default.createElement(Tree, { node: item });
			})
		)
	);
};

exports.default = Tree;