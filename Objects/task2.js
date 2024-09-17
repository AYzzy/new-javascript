function cars(details){
	
	for (let index = 0; index <= details.length; index ++){
		console.log(index, object[index])
	}
	return details
}
const car={ make:'Toyota', model: 'camry', year:2021}
let deal = cars(car)

console.log (deal)