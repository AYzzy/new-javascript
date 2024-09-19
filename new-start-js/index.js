// Slice and Splice 
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
let arr = [7,4,5,6,9]
let answer = arrayOfNumber.splice(1,0,6,9, ...arr) //first it picks the index,the amount of value to be removed, replace 
console.log(arrayOfNumber)
console.log(answer)

// ForEach
let arrs = [3,4,5,6,7,8]

arrs.forEach((element)=>{
  let answer = element * 2
  console.log(answer)
})

// FILTER

function evenNumbers(arr){
  return arr.filter((number)=> number % 2 ==0)
}

function getFriutLength(array){
  return array.filter((fruit)=> fruit.length >5) 
}

// map
function multiplyByTwo(array){
  return array.map((number)=> number * 2)
}

let getName = (array)=>{
  return array.map((obj)=>obj.name)
}

module.exports = {evenNumbers,getFriutLength,multiplyByTwo,getName}