const FIELDSIZE = 256;
const BITMASK = 0xff;

/*
 * set index and GFVector of elements on GF
 */
export function setGFInfo(GFVector) {
	const genePoly = [1, 0, 1, 1, 1, 0, 0, 0, 1];
	var mem = [0, 0, 0, 0, 0, 0, 0, 0]
	var input = 0;
	var output = 0;

	for (let i = 0; i < (FIELDSIZE - 1); i++) {
		for (let j = 0; j < (FIELDSIZE - 1); j++) {
			if (i === j) {
				input = 1;
			}
			else {
				input = 0;
			}

			output = mem[7];
			for (let k = (8 - 1); k >= 0; k--) {
				if (k === 0) {
					if (genePoly[0] === 1) {
						mem[0] = input ^ output;
					}
					else {
						mem[0] = input;
					}
				}
				else {
					if (genePoly[k] === 1) {
						mem[k] = mem[k - 1] ^ output;
					}
					else {
						mem[k] = mem[k - 1];
					}
				}
			}
		}

		let tmp = 0;
		for (let j = 0; j < 8; j++) {
			tmp = tmp + (mem[j] << j);
		}
		GFVector[(FIELDSIZE - 1) - i] = tmp;

		for (let j = 0; j < 8; j++) {
			mem[j] = 0;
		}
	}
	GFVector[0] = 0;

	return GFVector;
}

/*
 * lagrange interpolation on GF(extension field)
 * each operation what used here is shown at "field???" functions
 */
function lagrange(dataNum, dataX, dataY, GFVector) {
	var x = 0;
	var l1 = 0;
	var l2 = 0;
	var l = 0;
	var L = 0;

	for (let i = 0; i < dataNum; i++) {
		l1 = basePoly(dataNum, i, x, dataX, GFVector);
		l2 = basePoly(dataNum, i, x, dataX, GFVector);
		l = fieldDiv(l1, l2, GFVector);
		L = fieldAdd(L, fieldMul(dataY[i], l, GFVector));
	}

	return L;
}

/*
 * calculation base polynomial for lagrange interpolation
 * each operation what used here is shown at "field???" functions
 */
 function basePoly(dataNum, i, x, dataX, GFVector) {
	 var sub = 0;
	 var l = 1;

	 for (let j = 0; j < dataNum; j++) {
		 if (j != i) {
			 sub = fieldSub(x, dataX[j]);
			 l = fieldMul(l, sub, GFVector);
		 }
	 }

	 return l;
 }

/*
 * basic operations
 * addtion on GF(extension field)
 * xor and bit mask
 */
export function fieldAdd(x, y) {
	 return (x ^ y) & BITMASK;
 }

/*
 * subtraction on GF(extension field)
 * the same as add
 */
 function fieldSub(x, y) {
	 return (x ^ y) & BITMASK;
 }

/*
 * multiplication on GF(extension field)
 * convert vector to exponentiation, calc mod and reconvert
 */
 function fieldMul(x, y, GFVector) {
	 var indX = 0;
	 var indY = 0;
	 var indAns = 0;

	 if (x === 0 || y === 0) {
		 return 0;
	 }

	for (let i = 1; i < FIELDSIZE; i++) {
		if (x === GFVector[i]) {
			indX = i - 1;
		}
		if (y === GFVector[i]) {
			indY = i - 1;
		}
	}
	indAns = (inX + indY) % (FIELDSIZE - 1);
 }

 /*
  * division on GF(extension field)
  * convert vector to exponentiation, calc mod and reconvert
  */
 function fieldDiv(x, y, GFVector) {
	 var indX = 0;
	 var indY = 0;
	 var indAns = 0;

	 if (x === 0) {
		 return 0;
	 }
	 else if (y === 0) {
		 return -1;
	 }

	 for (let i = 0; i < FIELDSIZE; i++) {
		 if (x === GFVector[i]) {
			 indX = i - 1;
		 }
		 if (y === GFVector[i]) {
			 indY = i - 1;
		 }
	 }
	 indAns = (indX + ((FIELDSIZE - 1) - indY)) % (FIELDSIZE - 1);

	 return GFVector[indAns + 1];
 }
