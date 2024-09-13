function sumMultiplesOfThreeAndFive(number){
	let sum =0
	for(let num of number){
		if (num % 5 == 0 && num % 3 == 0){
			sum+=num
		}
	}
	return sum
}

module.exports = {sumMultiplesOfThreeAndFive}

let value =([3,5,8,15,30])
console.log(sumMultiplesOfThreeAndFive(value))
