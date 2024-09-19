let array = [1,2,3,"hommie", true];

//console.log(array)

let newArray = new Array(3);
newArray[0] = 10
newArray.push(2)
newArray.push(3)
newArray.push(4)
newArray.push(5)

//console.log(newArray)

let result = Array.from("semicolon")
console.log(result)

let results = Array.of(1,2,3,4,5,6,7,4,6)
console.log(results)

let arrayOfNumber= [1,2,3,4,5,6,7]

let slice = arrayOfNumber.slice(2,4)
console.log(slice)

let answer = arrayOfNumber.splice(2,4,30,32) //first it picks the index,the amount of value to be removed, replace 
console.log(arrayOfNumber)
console.log(answer)