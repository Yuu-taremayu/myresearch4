'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setChildren = exports.treeSlice = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
	nodeName: 'root',
	k: 0,
	n: 0,
	children: []
};

var treeSlice = exports.treeSlice = (0, _toolkit.createSlice)({
	name: 'tree',
	initialState: initialState,
	reducers: {
		setChildren: function setChildren(state, action) {
			if (state.nodeName === 'root') {
				console.log('hello');
			} else {
				console.log('ya');
			}
		}
	}
});

var setChildren = treeSlice.actions.setChildren;
exports.setChildren = setChildren;
exports.default = treeSlice.reducer;