let arrayOfNumbers = [1,2,3,4,5]

for(let index in arrayOfNumbers){
	console.log(arrayOfNumbers[index]);
}

let person = {
	firstName: "Bola",
	lastName: "Chinedu",
	Age : "16",
	occupation : "Student"
}

console.log(person.lastName)
console.log()
for (let key in person){
	console.log(person[key])
}

for (let number of arrayOfNumbers){
	console.log(number)
}