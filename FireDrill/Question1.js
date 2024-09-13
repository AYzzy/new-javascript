function sumEvenNumber(number){
	even = 0
	for(let count =0; count<number.length ;count++){
		if (count % 2 == 0){
			even+=count
		} 
	}
	return even
}
module.exports = {sumEvenNumber}


let numbers=[1,2,3,4,5,6,7,8,9]
console.log(sumEvenNumber(numbers))