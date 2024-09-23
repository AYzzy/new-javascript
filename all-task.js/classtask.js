function testScore(score){
  count = 0
  let scores =score.filter((score)=> {
    if(score >= 70) {
      count++
    }})
  return count
}

function addFivePoint(point){
  five = 5
  return point.map((point)=> point + five)
}

function squareOfNumber(arr){
  return arr.map((number)=>number ** 2)
}

let num = [2,4,6,8,10]
console.log(squareOfNumber(num))
module.exports = {testScore,addFivePoint,squareOfNumber}