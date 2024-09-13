const {add,subtract,evenNumber} = require("./Sum.js");

let numberOne = 2
let numberTwo = 20

test("Add two numbers", ()=>{
	let result = add(numberOne,numberTwo)
	expect(result).toBe(22)

})

test("Subtract two number", ()=>{
	let result =  subtract(numberTwo, numberOne)
	expect(result).toBe(18)

})

test("Return Number",()=>{
	let number = [1,2,3,4,5,6]
	let result = evenNumber(number)
	expect(result).toEqual([2,4,6])
})