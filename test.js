import test from 'ava';
import pair from './index.js';

test('Works with single letters', t => {
	const result = pair('GCG');
	const expected = [['G', 'C'], ['C', 'G'], ['G', 'C']];
	t.deepEqual(result, expected);
});
