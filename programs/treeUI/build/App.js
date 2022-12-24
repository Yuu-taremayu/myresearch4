'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'App' },
		_react2.default.createElement(_Tree2.default, null)
	);
};

exports.default = App;