const{sumEvenNumber} = require("./Question1.js");
const{findMaxNumber} = require("./Question2.js");
const{countOddNumber} = require("./Question3.js")
const{isPrime} = require("./Question4.js")
const{findFirstDuplicate} = require("./Question5.js")
const{reverseArray} = require("./Question6.js")
const{sumMultiplesOfThreeAndFive} = require("./Question9.js")
const{isPalindrome} = require("./Question8.js")
const{factorial} = require("./Question7.js")

test("Sum Even Numbers", ()=>{
	let result = sumEvenNumber([1,2,3,4,5,6,7,8,9])
	expect(result).toBe(20)

})

test("find the the largestNumber",()=>{
	let result = findMaxNumber([2,4,6,8,9,34,67,12,45,])
	expect(result).toBe(67)

})

test("CountThe odd Numbers",()=>{
	let result = countOddNumber([2,3,4,5,6,7,8,9])
	expect(result).toBe(4)

})

test("Confirm if its a prime number",()=>{
	let result = isPrime(7)
	expect(result).toBe(true)

})

test("Get the duplicate in the array",()=>{
	let result = findFirstDuplicate([1,3,5,7,9,2,4,6,8,4])
	expect(result).toBe(4)
})

test("Reverse array",()=>{
	let result = reverseArray([1,2,3,4,5,6])
	let expected = [6,5,4,3,2,1]
	expect(result).toEqual(expected)
})

test("Sum of 3 and 5 number",()=>{
	let result = sumMultiplesOfThreeAndFive([15,16,24,18,30])
	expect(result).toBe(45)
})

test("check if input is a palindrome",()=>{
	let result = isPalindrome("racecar")
	expect(result).toBe(true)

})

test("to get the factorial",()=>{
	let result = factorial(5)
	expect(result).toBe(120)

})

