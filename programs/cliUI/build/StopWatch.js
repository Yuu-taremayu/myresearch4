'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('react-bootstrap/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StopWatch = function StopWatch() {
	var _useState = (0, _react.useState)("00:00:00"),
	    _useState2 = _slicedToArray(_useState, 2),
	    displayTime = _useState2[0],
	    setDisplayTime = _useState2[1];

	var _useState3 = (0, _react.useState)(0),
	    _useState4 = _slicedToArray(_useState3, 2),
	    startTime = _useState4[0],
	    setStartTime = _useState4[1];

	var _useState5 = (0, _react.useState)(0),
	    _useState6 = _slicedToArray(_useState5, 2),
	    calcTime = _useState6[0],
	    setCalcTime = _useState6[1];

	var _useState7 = (0, _react.useState)(false),
	    _useState8 = _slicedToArray(_useState7, 2),
	    running = _useState8[0],
	    setRunning = _useState8[1];

	var _useState9 = (0, _react.useState)({ start: false, stop: true, reset: true }),
	    _useState10 = _slicedToArray(_useState9, 2),
	    btnDisabled = _useState10[0],
	    setDisabled = _useState10[1];

	(0, _react.useEffect)(function () {
		var timerInterval = void 0;

		if (running) {
			timerInterval = window.setInterval(function () {
				setCalcTime(Date.now() - startTime);
			}, 1000);
		}
		return function () {
			window.clearInterval(timerInterval);
		};
	}, [running]);

	(0, _react.useEffect)(function () {
		var currentTime = new Date(calcTime);
		var h = String(currentTime.getHours() - 9).padStart(2, "0");
		var m = String(currentTime.getMinutes()).padStart(2, "0");
		var s = String(currentTime.getSeconds()).padStart(2, "0");

		setDisplayTime(h + ':' + m + ':' + s);
	}, [calcTime]);

	var onClickStart = function onClickStart() {
		setStartTime(Date.now() - calcTime);
		setRunning(true);
		setDisabled({ start: true, stop: false, reset: false });
	};

	var onClickStop = function onClickStop() {
		setRunning(false);
		setDisabled({ start: false, stop: true, reset: false });
	};

	var onClickReset = function onClickReset() {
		setRunning(false);
		setDisplayTime("00:00:00");
		setCalcTime(0);
		setDisabled({ start: false, stop: true, reset: true });
	};

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			{ className: 'displayTime' },
			_react2.default.createElement(
				'time',
				null,
				displayTime
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'btnArea' },
			_react2.default.createElement(
				_Button2.default,
				{
					variant: 'outline-secondary',
					onClick: onClickStart,
					disabled: btnDisabled.start },
				'start'
			),
			_react2.default.createElement(
				_Button2.default,
				{
					variant: 'outline-secondary',
					onClick: onClickStop,
					disabled: btnDisabled.stop },
				'stop'
			),
			_react2.default.createElement(
				_Button2.default,
				{
					variant: 'outline-secondary',
					onClick: onClickReset,
					disabled: btnDisabled.reset },
				'reset'
			)
		)
	);
};

exports.default = StopWatch;