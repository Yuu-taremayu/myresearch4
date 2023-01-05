'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Terminal = require('./Terminal');

var _Terminal2 = _interopRequireDefault(_Terminal);

var _StopWatch = require('./StopWatch');

var _StopWatch2 = _interopRequireDefault(_StopWatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
	return _react2.default.createElement(
		'div',
		{ className: 'App' },
		_react2.default.createElement(
			'div',
			{ className: 'terminal' },
			_react2.default.createElement(_Terminal2.default, null)
		),
		_react2.default.createElement(
			'div',
			{ className: 'stopwatch' },
			_react2.default.createElement(_StopWatch2.default, null)
		)
	);
};

exports.default = App;