const op = require('./fieldOperation');
const consts = require('./defconst');

const FIELDSIZE = consts.FIELDSIZE;

const split = function(secret, ssParam, GFVector) {
	const serverId = [...Array(ssParam.n)].map((_, i) => i + 1);
	const poly = generatePoly(secret, ssParam.k);


	const shares = createShare(serverId, poly, ssParam, GFVector);

	return shares;
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
	let share = [];

	for (let i = 0; i < param.n; i++) {
		for (let j = 0; j < param.k; j++) {
			term = op.fieldMul(poly[j], val, GFVector);
			sum = op.fieldAdd(sum, term);
			val = op.fieldMul(val, serverId[i], GFVector);
		}
		share.push(sum);
		sum = 0;
		term = 1;
		val = 1;
	}
	return share;
};

const combine = function(shares, GFVector) {
	const serverId = [...Array(shares.length)].map((_, i) => i + 1);
	const secret = op.lagrange(shares.length, serverId, shares, GFVector)

	return secret;
};

exports.split = split;
exports.combine = combine;
