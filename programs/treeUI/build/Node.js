'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('react-bootstrap/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Form = require('react-bootstrap/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_React$Component) {
	_inherits(Node, _React$Component);

	function Node(props) {
		_classCallCheck(this, Node);

		var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, props));

		if (props.name === '') {
			_this.state = {
				nodeName: 'root',
				n: 0,
				k: 0
			};
		} else {
			_this.state = {
				nodeName: props.name,
				n: 0,
				k: 0
			};
		}
		return _this;
	}

	_createClass(Node, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'node' },
				_react2.default.createElement(
					_Card2.default,
					{ className: 'text-center' },
					_react2.default.createElement(
						_Card2.default.Header,
						null,
						this.state.nodeName
					),
					_react2.default.createElement(
						_Card2.default.Body,
						{ className: 'node-parameter' },
						_react2.default.createElement(_Form2.default.Control, {
							className: 'threshold',
							type: 'text',
							size: 'sm',
							placeholder: 'k',
							onChange: function onChange(e) {
								return _this2.setState({ k: e.target.value });
							}
						}),
						_react2.default.createElement(_Form2.default.Control, {
							className: 'split-num',
							type: 'text',
							size: 'sm',
							placeholder: 'n',
							onChange: function onChange(e) {
								return _this2.setState({ n: e.target.value });
							}
						})
					)
				)
			);
		}
	}]);

	return Node;
}(_react2.default.Component);

exports.default = Node;