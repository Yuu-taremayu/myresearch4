const op = require('./fieldOperation');
const utils = require('./ssUtils');
const FIELDSIZE = 256;

/*
const ssParam = {
	k: 2,
	n: 3,
	children: [
		{k: 1, n: 2, share: 0, children: [
			{k: 1, n: 1, share: 0, children: []}
			]},
		{k: 1, n: 2, share: 0, children: []},
		{k: 1, n: 2, share: 0, children: []}
	]
};
*/
const ssParam = {
	k: 0,
	n: 0
}

const secret = 123;

const GFVector = op.setGFInfo(Array(FIELDSIZE).fill(0));

const shares = utils.split(secret, ssParam, GFVector);
const reconst = utils.combine(shares, GFVector);

/*
const recursiveSplit = function(share, param, GFVector) {
	let childrenShare = utils.split(share, param, GFVector);
	console.log(childrenShare);
	console.log(param);
	for (let i = 0; i < param.children.length; i++) {
		param.children[i].share = childrenShare[i];
		if (param.children[i].children.length > 0) {
			recursiveSplit(childrenShare[i], param.children[i].children, GFVector);
		}
	}
	console.log(utils.combine(childrenShare, GFVector));
};

recursiveSplit(secret, ssParam, GFVector);
console.log(ssParam);
*/
