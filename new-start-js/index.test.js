const { default: expect } = require("expect")
const {evenNumbers,getFriutLength,multiplyByTwo,getName} = require("./index.js")

test('test for even number',()=>{
	let arr = [3,4,5,6,7,8]
	let result = evenNumbers(arr)
	let expected = [4,6,8]
	expect(result).toEqual(expected)
})

test("test that fruit length is greater than five",()=>{
	let fruit = ["banana","orange","pear"]
	let result = getFriutLength(fruit)
	let expected =["banana","orange"]
	expect(result).toEqual(expected)
})

test("multiply number by two",()=>{
  let arr = [3,4,5,6,7,8]
  let result = multiplyByTwo(arr)
  let expected =[6,8,10,12,14,16]
  expect(result).toEqual(expected)

})

test("map through an array of object",()=>{
  let arr = [{name: "John",age: 25,},{name: "Jane",age: 24}]
  let result = getName(arr)
  let expected = ["John", "Jane"]
  expect(result).toEqual(expected) 
})

