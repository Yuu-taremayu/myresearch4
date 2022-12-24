'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Card = require('react-bootstrap/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Form = require('react-bootstrap/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('react-bootstrap/Button');

var _Button2 = _interopRequireDefault(_Button);

var _treeSlice = require('./treeSlice');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Node = function Node(props) {
	var dispatch = (0, _reactRedux.useDispatch)();
	//dispatch(setNodeName(props.nodeName));
	//const nodeName = useSelector(state => state.nodeName);
	//console.log(nodeName);
	return _react2.default.createElement(
		'div',
		{ className: 'node' },
		_react2.default.createElement(
			_Card2.default,
			{ className: 'text-center' },
			_react2.default.createElement(
				_Card2.default.Header,
				null,
				'nodeName'
			),
			_react2.default.createElement(
				_Card2.default.Body,
				null,
				_react2.default.createElement(
					'div',
					{ className: 'node-parameter' },
					_react2.default.createElement(_Form2.default.Control, {
						className: 'threshold',
						type: 'text',
						placeholder: 'k',
						onChange: function onChange(e) {
							return dispatch((0, _treeSlice.setParameterK)(e.target.value));
						}
					}),
					_react2.default.createElement(_Form2.default.Control, {
						className: 'split-num',
						type: 'text',
						placeholder: 'n',
						onChange: function onChange(e) {
							return dispatch((0, _treeSlice.setParameterN)(e.target.value));
						}
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'btn-confirm' },
					_react2.default.createElement(
						_Button2.default,
						{ variant: 'outline-primary', size: 'sm' },
						'Confirm'
					)
				)
			)
		)
	);
};

exports.default = Node;