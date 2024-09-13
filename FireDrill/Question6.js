function reverseArray(array){
	let rev = [];
	let end = array.length;
	for(let outer = array.length-1; outer >= 0; outer--){
		rev.push(array[outer]);
	}
	return rev;
}

module.exports = {reverseArray}