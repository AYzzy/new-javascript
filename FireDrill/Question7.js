function factorial(number){
	let numbers = 1
	for(let num =1 ; num <= number; num++){
		numbers  *= num
	}
	return numbers
}

module.exports = {factorial}


let value = 5
console.log(factorial(value))