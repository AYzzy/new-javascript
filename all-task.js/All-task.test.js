const{sumEveryTwoIndex,sumTwoIndex} = require("./sumEvery2index.js");
const {countOfElements} = require("./count-number-of-element.js")
const {testScore,addFivePoint,squareOfNumber} = require("./classtask.js");
const { default: expect } = require("expect");

test("to sum every 2 index ",()=>{
  let result=[2,3,4,5,6,7]
  let main = sumEveryTwoIndex(result)
  expect(main).toEqual([5, 9, 13])

})

test("to sum up 2 indexs",()=>{
  let result=[2,3,4,5,6,7]
  let main = sumTwoIndex(result)
  expect(main).toEqual([5, 9, 13])
})

test("count the mode of each elemnts in the array",()=>{
  let num = [1,1,2,3,2]
  let result = countOfElements(num)
  let expected = {'1': 2,'2':2,'3':1}
  expect(result).toEqual(expected)
})

test("count scores higher than 70",()=>{
  let num = [54,70,23,77,80,59]
  let result = testScore(num)
  expect(result).toEqual(3)
})

test("test to add extra 5 point to all scores",()=>{
  let number =[85,92,78,88,95]
  let result = addFivePoint(number)
  let expected = [90,97,83,93,100]
  expect(result).toEqual(expected)
})

test("test to get the sqaure of each elements ",()=>{
  let num = [2,4,6,8,10]
  let result = squareOfNumber(num)
  let expected = [4,16,36,64,100]
  expect(result).toEqual(expected)
})