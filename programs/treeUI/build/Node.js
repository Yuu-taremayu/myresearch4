'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('react-bootstrap/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Form = require('react-bootstrap/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Node = function Node(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'node' },
		_react2.default.createElement(
			_Card2.default,
			{ className: 'text-center' },
			_react2.default.createElement(
				_Card2.default.Header,
				null,
				'a'
			),
			_react2.default.createElement(
				_Card2.default.Body,
				{ className: 'node-parameter' },
				_react2.default.createElement(_Form2.default.Control, {
					className: 'threshold',
					type: 'text',
					size: 'sm',
					placeholder: 'k'
				}),
				_react2.default.createElement(_Form2.default.Control, {
					className: 'split-num',
					type: 'text',
					size: 'sm',
					placeholder: 'n'
				})
			)
		)
	);
};

exports.default = Node;