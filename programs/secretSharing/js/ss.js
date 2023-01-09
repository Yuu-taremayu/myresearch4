const op = require('./fieldOperation');
const utils = require('./ssUtils');
const FIELDSIZE = 256;

const ssParam = {
	k: 2,
	n: 3
};

const GFVector = op.setGFInfo(Array(FIELDSIZE).fill(0));

const shares = utils.split(ssParam, GFVector);
console.log(shares);
const secret = utils.combine(shares, GFVector);
console.log(secret);
