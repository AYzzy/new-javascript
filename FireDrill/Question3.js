function countOddNumber(number){
	odd = 0
	for (let num in number){
		if (num % 2 ==1){
			odd++
		} 
	}
	return odd
}
module.exports = {countOddNumber}

function count(number){
	newNum =0
	for(let num in number){
		newNum++
	}
	return newNum
}

let number = [1,2,3,4,5,6,7,8,9]
console.log(count(number))