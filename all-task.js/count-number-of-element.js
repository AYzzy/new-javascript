function countOfElements(number) {
  numbers = {}
  for (let num of number){
      numbers[num] = (numbers[num]||0)+1
  }
  return numbers
}



let num = [5,4,1,1,1,5,3,2,3,2]
console.log(countOfElements(num))

module.exports =  {countOfElements}