
'use strict';

// pairs = AT and CG

function pairElement(str) {
	const pairs = [
		['A', 'T'],
		['C', 'G']
	];

	return str.split('').reduce((prev, cur) => {
		let pair = pairs.filter(currentPair => {
			return currentPair.includes(cur);
		})[0];

		const index = pair.indexOf(cur);
		const newPair = index === 0 ? pair : [...pair].reverse();

		prev.push(newPair);
		return prev;
	}, []);
}

module.exports = pairElement;
