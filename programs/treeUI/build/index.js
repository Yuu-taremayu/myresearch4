'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _client = require('react-dom/client');

var ReactDOM = _interopRequireWildcard(_client);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_react2.default.createElement(_App2.default, null));