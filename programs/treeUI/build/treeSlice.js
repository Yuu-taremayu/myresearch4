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
			if (action.payload.nodeName === "root") {
				state.k = action.payload.k;
			} else {
				var index = action.payload.nodeName.split("-");
				index.shift();
				var path = "";
				for (var i = 0; i < index.length; i++) {
					path += ".children[" + index[i] + "]";
				}
				path = "state" + path + ".k";
				eval(path + "= action.payload.k;");
			}
			/*
   let stack = [];
   stack.push(state);
   let flag = 0;
   while(stack.length) {
   	console.log("---");
   	for (let j in stack[0]) {
   		if (stack[0][j].constructor === Object
   			&& !stack[0][j].length) {
   			stack.push(stack[0][j]);
   		}
   		else if (Array.isArray(stack[0][j])) {
   			for (let i = 0; i < stack[0][j].length; i++) {
   				stack.push(stack[0][j][i]);
   			}
   		}
   		else {
   			if (stack[0][j] === action.payload.nodeName) {
   				flag = 1;
   			}
   			if (flag === 1 && j === "k") {
   				console.log(`!!!${j} : ${stack[0][j]}`);
   			}
   			else {
   				console.log(`${j} : ${stack[0][j]}`);
   			}
   		}
   	}
   	flag = 0;
   	stack.shift();
   }
   */
		},
		setParameterN: function setParameterN(state, action) {
			var path = [];
			if (action.payload.nodeName === "root") {
				state.n = action.payload.n;
			} else {
				var index = action.payload.nodeName.split("-");
				index.shift();
				var _path = "";
				for (var i = 0; i < index.length; i++) {
					_path += ".children[" + index[i] + "]";
				}
				_path = "state" + _path + ".n";
				eval(_path + "= action.payload.n;");
			}
		},
		setChildren: function setChildren(state, action) {
			if (action.payload.nodeName === "root") {
				state.children = [];
				for (var i = 0; i < state.n; i++) {
					state.children.push({
						nodeName: 'children-' + i,
						k: 0,
						n: 0,
						children: []
					});
				}
			} else {
				var index = action.payload.nodeName.split("-");
				index.shift();
				var path = "";
				for (var _i = 0; _i < index.length; _i++) {
					path += ".children[" + index[_i] + "]";
				}
				path = "state" + path;
				var n = 0;
				eval('n = ' + path + '.n;');
				eval(path + ".children = [];");
				for (var _i2 = 0; _i2 < n; _i2++) {
					eval(path + ".children.push({nodeName: '" + action.payload.nodeName.toString() + "-" + _i2 + "', k: 0, n: 0, children: []});");
				}
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