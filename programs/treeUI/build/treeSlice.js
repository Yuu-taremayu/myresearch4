'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setChildren = exports.setParameterN = exports.setParameterK = exports.treeSlice = exports.initialState = undefined;

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
var setParameterK = _treeSlice$actions.setParameterK,
    setParameterN = _treeSlice$actions.setParameterN,
    setChildren = _treeSlice$actions.setChildren;
exports.setParameterK = setParameterK;
exports.setParameterN = setParameterN;
exports.setChildren = setChildren;
exports.default = treeSlice.reducer;