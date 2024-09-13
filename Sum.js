function add(first,second){
	return first + second
}

function subtract( second, first){
	return second - first
}

function evenNumber(arr){
	let newArray=[]
	for(let num of arr){
		if(num % 2 == 0){
			newArray.push(num)
		}
	}
	return newArray
}

module.exports = {add, subtract, evenNumber}