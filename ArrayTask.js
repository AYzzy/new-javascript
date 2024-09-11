function ArrayTask(number){
let even = 0
let odd = 0
let newArray = []
	for (let num in number){
		if(num % 2 ==0){
			even++
		}
		else{
			odd++
		}

	}

	newArray.push(even)
	newArray.push(odd)
	return newArray
}

let ans = ArrayTask([4,2,1,6,8,7,3,9,0])
console.log(ans)