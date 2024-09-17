function human(person){
	for(let per in person){
		console.log(per +':'+person[per])
	}
	return person
}

const person = {firstName: 'John', LastName: 'Doe', Age : 25}
const{firstName,LastName,Age} = person

console.log(human(person))