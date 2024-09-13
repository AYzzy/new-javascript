function findMaxNumber(number){
	max = 0
	for (let num of number){
		if (num > max){
			max = num
		} 
	}
	return max
}
module.exports = {findMaxNumber}

//let numbers=[1,23,45,67,89,54,32]
//console.log(findMaxNumber(numbers))