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
		setNodeName: (state, action) => {
			state.nodeName = action.payload;
		},
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

export const { setNodeName, setParameterK, setParameterN, setChildren } = treeSlice.actions;
export default treeSlice.reducer;
