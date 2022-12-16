'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setChildren = exports.setParameterN = exports.setParameterK = exports.setNodeName = exports.treeSlice = exports.initialState = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = exports.initialState = {
	nodeName: 'root',
	k: 0,
	n: 0,
	children: []
};

var treeSlice = exports.treeSlice = (0, _toolkit.createSlice)({
	name: 'tree',
	initialState: initialState,
	reducers: {
		setNodeName: function setNodeName(state, action) {
			state.nodeName = action.payload;
		},
		setParameterK: function setParameterK(state, action) {
			state.k = action.payload;
		},
		setParameterN: function setParameterN(state, action) {
			state.n = action.payload;
		},
		setChildren: function setChildren(state, action) {
			if (state.nodeName === 'root') {
				console.log('hello');
			} else {
				console.log('ya');
			}
		}
	}
});

var _treeSlice$actions = treeSlice.actions;
var setNodeName = _treeSlice$actions.setNodeName,
    setParameterK = _treeSlice$actions.setParameterK,
    setParameterN = _treeSlice$actions.setParameterN,
    setChildren = _treeSlice$actions.setChildren;
exports.setNodeName = setNodeName;
exports.setParameterK = setParameterK;
exports.setParameterN = setParameterN;
exports.setChildren = setChildren;
exports.default = treeSlice.reducer;