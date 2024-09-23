

function sumEveryTwoIndex(number){
  list =[]
  let first = number[0] + number[1]
  let second = number[2] + number[3]
  let third = number[4] + number[5]
  list.push(first, second, third)
  return list
}

function sumTwoIndex(number){
  let sum = 0
  let newList = []
  for(let num in number){
    sum +=number[num]
    if(num % 2 ==1){
      newList.push(sum)
      sum =0
    }
  }
  return newList
}

function sumTwoIndex2(){
  let sum =0
  let newList2 =[]
  for(let num in number){
    number.slice(2)
    sum+=number[num]
    newList2.push(sum)
    sum =0
  }
  return newList2
}



module.exports = {sumEveryTwoIndex, sumTwoIndex}