import React from 'react';
import { useSelector } from 'react-redux';
import Tree from './Tree';
import StopWatch from './StopWatch';

const App = (props) => {
	const tree = useSelector(state => state.tree);
	return (
		<div className="App">
			<div className="tree">
				<Tree node={tree} depth={0}/>
			</div>
			<div className="stopwatch">
				<StopWatch />
			</div>
		</div>
	);
}

export default App;
