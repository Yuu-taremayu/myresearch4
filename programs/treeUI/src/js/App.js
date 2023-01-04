import React from 'react';
import { useSelector } from 'react-redux';
import Tree from './Tree';

const App = (props) => {
	const tree = useSelector(state => state.tree);
	return (
		<div className="App">
			<Tree node={tree}/>
		</div>
	);
}

export default App;
