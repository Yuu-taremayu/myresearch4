import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	nodeName: 'root',
	k: 0,
	n: 0,
	children: [],
};

export const treeSlice = createSlice({
	name: 'tree',
	initialState,
	reducers: {
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

export const { setChildren } = treeSlice.actions;
export default treeSlice.reducer;
