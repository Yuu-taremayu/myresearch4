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
			var path = [];
			if (action.payload.nodeName === "root") {
				state.k = action.payload.k;
			} else {
				path = action.payload.nodeName.split("-");
				path.shift();
				var node = state;
				for (var i = 0; i < path.length; i++) {
					node = node.children[path[i]];
				}
				node.k = action.payload.k;
			}
			var stack = [];
			stack.push(state);
			var flag = 0;
			while (stack.length) {
				console.log("---");
				for (var j in stack[0]) {
					if (stack[0][j].constructor === Object && !stack[0][j].length) {
						stack.push(stack[0][j]);
					} else if (Array.isArray(stack[0][j])) {
						for (var _i = 0; _i < stack[0][j].length; _i++) {
							stack.push(stack[0][j][_i]);
						}
					} else {
						if (stack[0][j] === action.payload.nodeName) {
							flag = 1;
						}
						if (flag === 1 && j === "k") {
							console.log('!!!' + j + ' : ' + stack[0][j]);
						} else {
							console.log(j + ' : ' + stack[0][j]);
						}
					}
				}
				flag = 0;
				stack.shift();
			}
		},
		setParameterN: function setParameterN(state, action) {
			var path = [];
			if (action.payload.nodeName === "root") {
				state.n = action.payload.n;
			} else {
				path = action.payload.nodeName.split("-");
				path.shift();
				var node = state;
				for (var i = 0; i < path.length; i++) {
					node = node.children[path[i]];
				}
				node.n = action.payload.n;
			}
		},
		setChildren: function setChildren(state, action) {
			state.children = [];
			for (var i = 0; i < state.n; i++) {
				state.children.push({
					nodeName: 'children-' + i,
					k: 0,
					n: 0,
					children: []
				});
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