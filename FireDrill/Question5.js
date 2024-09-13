function findFirstDuplicate(number){
	duplicate = -1
	for(let num =0; num < number.length; num++){
		for(let index = num+1; index < number.length; index++){
			if(number[num] == number[index]){ 
				duplicate = number[index]
				return duplicate
			}
		}
	
	}
	return duplicate
}

module.exports = {findFirstDuplicate}
let values = findFirstDuplicate([3, 9, 5, 7,8, 4, 3]);
console.log(values);