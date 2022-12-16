import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setParameterK, setParameterN, setChildren } from './treeSlice';

const Node = (props) => {
	const dispatch = useDispatch();
	//dispatch(setNodeName(props.nodeName));
	//const nodeName = useSelector(state => state.nodeName);
	//console.log(nodeName);
	return (
		<div className="node">
			<Card className="text-center">
				<Card.Header>nodeName</Card.Header>
				<Card.Body>
					<div className="node-parameter">
						<Form.Control
							className="threshold"
							type="text"
							placeholder="k"
							onChange={(e) => dispatch(setParameterK(e.target.value))}
						/>
						<Form.Control
							className="split-num"
							type="text"
							placeholder="n"
							onChange={(e) => dispatch(setParameterN(e.target.value))}
						/>
					</div>
					<div className="btn-confirm">
						<Button variant="outline-primary" size="sm" onClick={() => dispatch(setChildren())}>Confirm</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Node;
