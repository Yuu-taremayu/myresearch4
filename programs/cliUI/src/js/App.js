import React from 'react';
import Terminal from './Terminal';
import StopWatch from './StopWatch';

const App = () => {
	return (
	<div className="App">
		<div className="terminal">
			<Terminal />
		</div>
		<div className="stopwatch">
			<StopWatch />
		</div>
	</div>
	);
};

export default App;
