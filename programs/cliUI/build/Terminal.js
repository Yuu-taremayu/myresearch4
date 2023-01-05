"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Terminal = function Terminal() {
	var operater = ["Command > ", "Split mode => "];

	var _useState = (0, _react.useState)(operater[0]),
	    _useState2 = _slicedToArray(_useState, 2),
	    com = _useState2[0],
	    setCom = _useState2[1];

	var _useState3 = (0, _react.useState)(["root"]),
	    _useState4 = _slicedToArray(_useState3, 2),
	    file = _useState4[0],
	    setFile = _useState4[1];

	var _useState5 = (0, _react.useState)(""),
	    _useState6 = _slicedToArray(_useState5, 2),
	    target = _useState6[0],
	    setTarget = _useState6[1];

	var _useState7 = (0, _react.useState)(false),
	    _useState8 = _slicedToArray(_useState7, 2),
	    mode = _useState8[0],
	    setMode = _useState8[1];

	var innerWidth = window.innerWidth;
	var innerHeight = window.innerHeight;
	var styles = {
		width: innerWidth,
		height: innerHeight
	};
	var help = "type 'split', then choose file, and input split number\nAvailable commands -> help, ls, split";

	var displayString = function displayString(key) {
		if (key.length === 1) {
			setCom(com + key);
		} else if (key === "Enter") {
			if (mode === false) {
				setCom(com + "\n" + operater[0]);
			} else {
				setCom(com + "\n" + operater[1]);
			}
		}
		var command = com.split(" ");
		command = command[command.length - 1];

		if (command === "help") {
			if (mode === false) {
				setCom(com + "\n" + help + "\n" + operater[0]);
			} else {
				setCom(com + "\nChoose file, then input split number\n" + operater[1]);
			}
		} else if (command === "ls") {
			var files = file[0];
			for (var i = 1; i < file.length; i++) {
				if (i % 8 === 0) {
					files = files + "\n" + file[i];
				} else {
					files = files + "  " + file[i];
				}
			}
			if (mode === false) {
				setCom(com + "\n" + files + "\n" + operater[0]);
			} else {
				setCom(com + "\n" + files + "\n" + operater[1]);
			}
		} else if (command === "reset") {
			setFile(["root"]);
		} else if (command === "split" && mode === false) {
			setCom(com + "\n\n" + operater[1]);
			setMode(true);
		} else if (hasFile(command) && mode === true) {
			setTarget(command);
			setCom(com + "\ntarget file exists\nset target\n" + operater[1]);
		} else if (command === "quit" && mode === true) {
			setCom(com + "\n\n" + operater[0]);
			setMode(false);
		}

		if (target.length !== 0 && command > 0 && command < 10) {
			setCom(com + "\nthe file splitted\n" + operater[1]);
			if (target === "root") {
				var addFile = [];
				for (var _i = 0; _i < command; _i++) {
					addFile.push("children-" + _i);
				}
				setFile([].concat(_toConsumableArray(file), addFile));
			} else {
				var _addFile = [];
				for (var _i2 = 0; _i2 < command; _i2++) {
					_addFile.push(target + "-" + _i2);
				}
				setFile([].concat(_toConsumableArray(file), _addFile));
			}
			setTarget("");
		}
	};

	var hasFile = function hasFile(item) {
		for (var i = 0; i < file.length; i++) {
			if (file[i] === item) {
				return true;
			}
		}
		return false;
	};

	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement("textarea", {
			id: "terminal",
			rows: "5",
			cols: "40",
			spellCheck: "false",
			style: styles,
			value: com,
			onKeyDown: function onKeyDown(e) {
				return displayString(e.key);
			} })
	);
};

exports.default = Terminal;