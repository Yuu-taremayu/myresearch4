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
			let path = [];
			if (action.payload.nodeName === "root") {
				state.k = action.payload.k;
			}
			else {
				path = action.payload.nodeName.split("-");
				path.shift();
				let node = state;
				for (let i = 0; i < path.length; i++) {
					node = node.children[path[i]];
				}
				node.k = action.payload.k;
			}
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
		},
		setParameterN: (state, action) => {
			let path = [];
			if (action.payload.nodeName === "root") {
				state.n = action.payload.n;
			}
			else {
				path = action.payload.nodeName.split("-");
				path.shift();
				let node = state;
				for (let i = 0; i < path.length; i++) {
					node = node.children[path[i]];
				}
				node.n = action.payload.n;
			}
		},
		setChildren: (state, action) => {
			state.children = [];
			for (let i = 0; i < state.n; i++) {
				state.children.push({
					nodeName: 'children-' + i,
					k: 0,
					n: 0,
					children: []
					});
			}
		},
	},
});

export const { setNodeName, setParameterK, setParameterN, setChildren } = treeSlice.actions;
export default treeSlice.reducer;
