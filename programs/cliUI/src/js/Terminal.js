import React, { useState } from 'react';

const Terminal = () => {
	const operater = ["Command > ", "Split mode => "];
	const [com, setCom] = useState(operater[0]);
	const [file, setFile] = useState(["root"]);
	const [target, setTarget] = useState("");
	const [mode, setMode] = useState(false);
	const innerWidth = window.innerWidth;
	const innerHeight = window.innerHeight;
	const styles = {
		width: innerWidth,
		height: innerHeight
	};
	const help = "type 'split', then choose file, and input split number\nAvailable commands -> help, ls, split";

	const displayString = (key) => {
		if (key.length === 1) {
			setCom(com + key);
		}
		else if (key === "Enter") {
			if (mode === false) {
				setCom(com + "\n" + operater[0]);
			}
			else {
				setCom(com + "\n" + operater[1]);
			}
		}
		let command = com.split(" ");
		command = command[command.length - 1];

		if (command === "help") {
			if (mode === false) {
				setCom(com + "\n" + help + "\n" + operater[0]);
			}
			else {
				setCom(com + "\nChoose file, then input split number\n" + operater[1]);
			}
		}
		else if (command === "ls") {
			let files = file[0];
			for (let i = 1; i < file.length; i++) {
				if (i % 8 === 0) {
					files = files + "\n" + file[i];
				}
				else {
					files = files + "  " + file[i];
				}
			}
			if (mode === false) {
				setCom(com + "\n" + files + "\n" + operater[0]);
			}
			else {
				setCom(com + "\n" + files + "\n" + operater[1]);
			}
		}
		else if (command === "reset") {
			setFile(["root"]);
		}
		else if (command === "split" && mode === false) {
			setCom(com + "\n\n" + operater[1]);
			setMode(true);
		}
		else if (hasFile(command) && mode === true) {
			setTarget(command);
			setCom(com + "\ntarget file exists\nset target\n" + operater[1]);
		}
		else if (command === "quit" && mode === true) {
			setCom(com + "\n\n" + operater[0]);
			setMode(false);
		}

		if (target.length !== 0 && command > 0 && command < 10) {
			setCom(com + "\nthe file splitted\n" + operater[1]);
			if (target === "root") {
				let addFile = [];
				for (let i = 0; i < command; i++) {
					addFile.push("children-" + i);
				}
				setFile([...file, ...addFile]);
			}
			else {
				let addFile = [];
				for (let i = 0; i < command; i++) {
					addFile.push(target + "-" + i);
				}
				setFile([...file, ...addFile]);
			}
			setTarget("");
		}
	}

	const hasFile = (item) => {
		for (let i = 0; i < file.length; i++) {
			if (file[i] === item) {
				return true;
			}
		}
		return false;
	}

	return (
		<div>
			<textarea
				id="terminal"
				rows="5"
				cols="40"
				spellCheck="false"
				style={styles}
				value={com}
				onKeyDown={(e) => displayString(e.key)}>
			</textarea>
		</div>
	);
};

export default Terminal;
