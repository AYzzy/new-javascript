const{sumEveryTwoIndex,sumTwoIndex} = require("./sumEvery2index.js");

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