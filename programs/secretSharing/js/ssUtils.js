const op = require('./fieldOperation');

const FIELDSIZE = 256;
const ssParam = {
	k: 0,
	n: 0
};

exports.split = function(GFVector) {
	const secret = 124;
	const serverId = [...Array(ssParam.n).keys()];
	const poly = generatePoly(secret, ssParam.k);

	console.log(serverId);
};

const generatePoly = function(secret, k) {
	let poly = [secret];

	for (let i = 0; i < k; i++) {
		poly.push(Math.floor(Math.random() * 256));
	}
	return poly;
};

const createShare = function(serverId, poly, param, GFVector) {
	let sum = 0;
	let term = 1;
	let val = 1;
	for (let i = 0; i < param.n; i++) {
		for (let j = 0; j < param.k; j++) {
			term = op.fieldMul(poly[i], val, GFVector);
			sum = op.fieldAdd(sum, term);
			val = op.fieldMul(val, serverId[i], GFVector);
		}
		share.push(sum);
		sum = 0;
		term = 1;
		val = 1;
	}
};
