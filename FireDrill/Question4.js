function isPrime(number){
	prime = 0
	for(let num =2;num< number/2; num ++){
		if (number % num == 0) {
			prime++
		}  
	
	}
	return prime ==0 ?true:false
	
}

module.exports = {isPrime}

let number = (9)
console.log(isPrime(number))