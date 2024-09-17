function cars(details){
	
	for (let index in details){
		console.log(index, details[index])
	}
	return details
}
const car={ make:'Toyota', model: 'camry', year:2021}
let deal = cars(car)

console.log (deal)