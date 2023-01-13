import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	nodeName: 'root',
	k: 0,
	n: 0,
	children: [],
};

export const treeSlice = createSlice({
	name: 'tree',
	initialState,
	reducers: {
		setParameterK: (state, action) => {
			if (action.payload.nodeName === "root") {
				state.k = action.payload.k;
			}
			else {
				let index = action.payload.nodeName.split("-");
				index.shift();
				let path = "";
				for (let i = 0; i < index.length; i++) {
					path += ".children[" + index[i] + "]"
				}
				path = "state" + path + ".k";
				eval(path + "= action.payload.k;");
			}
		},
		setParameterN: (state, action) => {
			let path = [];
			if (action.payload.nodeName === "root") {
				state.n = action.payload.n;
			}
			else {
				let index = action.payload.nodeName.split("-");
				index.shift();
				let path = "";
				for (let i = 0; i < index.length; i++) {
					path += ".children[" + index[i] + "]"
				}
				path = "state" + path + ".n";
				eval(path + "= action.payload.n;");
			}
		},
		setChildren: (state, action) => {
			if (action.payload.nodeName === "root") {
				state.children = [];
				for (let i = 0; i < state.n; i++) {
					state.children.push({
						nodeName: 'children-' + i,
						k: 0,
						n: 0,
						children: []
						});
				}
			}
			else {
				let index = action.payload.nodeName.split("-");
				index.shift();
				let path = "";
				for (let i = 0; i < index.length; i++) {
					path += ".children[" + index[i] + "]"
				}
				path = "state" + path;
				let n = 0;
				eval('n = ' + path + '.n;');
				eval(path + ".children = [];");
				for (let i = 0; i < n; i++) {
					eval(path + ".children.push({nodeName: '" + action.payload.nodeName.toString() + "-" + i + "', k: 0, n: 0, children: []});");
				}
			}
		},
	},
});

export const {setParameterK, setParameterN, setChildren } = treeSlice.actions;
export default treeSlice.reducer;
