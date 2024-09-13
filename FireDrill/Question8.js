function isPalindrome(number){
	let letter = ""
	for(let num= number.length-1; num >= 0;num --){
		letter += number[num]
	}
	if(number === letter){
		return true
	}
	else{
		return false
	}
	
}

module.export = {isPalindrome}

let value = "racecar"

console.log(isPalindrome(value))