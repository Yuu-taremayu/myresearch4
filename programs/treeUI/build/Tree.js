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
	//const dispatch = useDispatch();
	//store.dispatch(setNodeName("root"));
	//const name = useSelector((state) => state.nodeName);
	//console.log(name);
	return _react2.default.createElement(
		'div',
		{ className: 'tree' },
		_react2.default.createElement(_Node2.default, { nodeName: 'root' })
	);
};

exports.default = Tree;