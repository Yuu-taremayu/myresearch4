'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.store = undefined;

var _toolkit = require('@reduxjs/toolkit');

var _treeSlice = require('./treeSlice');

var _treeSlice2 = _interopRequireDefault(_treeSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _toolkit.configureStore)({
	reducer: {
		tree: _treeSlice2.default
	}
});