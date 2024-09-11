function ans(id,available,count,name,author){
this.id = Number (id)
this.available = Boolean (available)
this.count = Number (count)
this.name = String(name)
this.author = String(author)
}

let input = new ans(1, true, 6, "mystery", "miracle")
console.log(input)


function calculator(left_operant,operator,right_operant){
let answer =0
if (operator == '*') {
	answer = Number(left_operant) * Number(right_operant)
}
else if (operator =='/') {
	answer = Number(left_operant) / Number(right_operant)
}
else if (operator == '+'){
	answer = Number(left_operant) + Number(right_operant)
}
else if (operator =='-'){
	answer = Number(left_operant) - Number(right_operant)
}
else{
	answer = 'NaN'
}
 return answer
}


let userInput = calculator("15", '+' ,"10")
console.log(userInput)