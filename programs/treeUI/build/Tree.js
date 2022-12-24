'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _treeSlice = require('./treeSlice');

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function Tree(props) {
	console.log(_store.store.getState());
	var a;
	if ((0, _reactRedux.useSelector)(function (state) {
		return state.tree.children;
	}).length === 0) {
		a = _react2.default.createElement(
			'p',
			null,
			'bbb'
		);
	} else {
		var a = _react2.default.createElement(
			'p',
			null,
			'aaa'
		);
	}
	return _react2.default.createElement(
		'div',
		{ className: 'tree' },
		_react2.default.createElement(_Node2.default, null),
		a
	);
};

exports.default = Tree;