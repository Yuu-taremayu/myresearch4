'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
	var tree = (0, _reactRedux.useSelector)(function (state) {
		return state.tree;
	});
	return _react2.default.createElement(
		'div',
		{ className: 'App' },
		_react2.default.createElement(_Tree2.default, { node: tree, depth: 0 })
	);
};

exports.default = App;