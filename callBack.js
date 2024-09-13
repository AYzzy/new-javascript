function multiplyByTwo(number){
	let multiplier = 2
	return number * multiplier
}

function calculate(num, callback){
	return callback(num)
}

console.log(calculate(3,multiplyByTwo))



function calculate(num, callback){
	return callback(num)
}

console.log(calculate(3,function(number){
	let nultiplier = 2
	return number * nultiplier

}))

console.log(calculate(3,(number) =>{
	let nultiplier = 2
	return number * nultiplier

}))


