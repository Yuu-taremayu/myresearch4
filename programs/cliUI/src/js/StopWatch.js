import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const StopWatch = () => {
	const [displayTime, setDisplayTime] = useState("00:00:00");
	const [startTime, setStartTime] = useState(0);
	const [calcTime, setCalcTime] = useState(0);
	const [running, setRunning] = useState(false);
	const [btnDisabled, setDisabled] = useState({start: false, stop: true, reset: true});

	useEffect(() => {
		let timerInterval;
		
		if (running) {
			timerInterval = window.setInterval(() => {
				setCalcTime(Date.now() - startTime);
				}, 1000);
		}
		return () => {window.clearInterval(timerInterval);}
	}, [running]);

	useEffect(() => {
		const currentTime = new Date(calcTime);
		const h = String(currentTime.getHours() - 9).padStart(2, "0");
		const m = String(currentTime.getMinutes()).padStart(2, "0");
		const s = String(currentTime.getSeconds()).padStart(2, "0");

		setDisplayTime(`${h}:${m}:${s}`);
	}, [calcTime]);

	const onClickStart = () => {
		setStartTime(Date.now() - calcTime);
		setRunning(true);
		setDisabled({start: true, stop: false, reset: false})
	};

	const onClickStop = () => {
		setRunning(false);
		setDisabled({start: false, stop: true, reset: false})
	};

	const onClickReset = () => {
		setRunning(false);
		setDisplayTime("00:00:00");
		setCalcTime(0);
		setDisabled({start: false, stop: true, reset: true})
	};

	return (
	<div>
		<div className="displayTime">
			<time>{displayTime}</time>
		</div>
		<div className="btnArea">
			<Button
				variant="outline-secondary"
				onClick={onClickStart}
				disabled={btnDisabled.start}>start</Button>
			<Button
				variant="outline-secondary"
				onClick={onClickStop}
				disabled={btnDisabled.stop}>stop</Button>
			<Button
				variant="outline-secondary"
				onClick={onClickReset}
				disabled={btnDisabled.reset}>reset</Button>
		</div>
	</div>
	);
}

export default StopWatch;
