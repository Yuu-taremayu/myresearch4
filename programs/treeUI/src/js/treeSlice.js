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
			if (state.nodeName === 'root') {
				console.log('hello');
			}
			else {
				console.log('ya');
			}
		},
	},
});

export const { setNodeName, setParameterK, setParameterN, setChildren } = treeSlice.actions;
export default treeSlice.reducer;
