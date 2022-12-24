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
			state.k = action.payload;
		},
		setParameterN: (state, action) => {
			state.n = action.payload;
		},
		setChildren: (state, action) => {
			console.log(state.n);
			for (let i = 0; i < state.n; i++) {
				console.log("aa");
				state.children.push({
					nodeName: 'children',
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
