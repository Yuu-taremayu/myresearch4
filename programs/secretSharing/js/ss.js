const op = require('./fieldOperation');
const utils = require('./ssUtils');
const FIELDSIZE = 256;

const GFVector = op.setGFInfo(Array(FIELDSIZE).fill(0));
console.log(GFVector);

utils.split(GFVector);
