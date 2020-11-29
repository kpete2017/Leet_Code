export function twoNumberSum(array: number[], targetSum: number) {
	const map: {[key: number]: boolean} = {};
	for(let i = 0; i < array.length; i++) {
		const tempSum = targetSum - array[i];
		if(map[tempSum]) {
			return [tempSum, array[i]]
		} else {
			map[array[i]] = true;
		}
	}
	return [];
}
