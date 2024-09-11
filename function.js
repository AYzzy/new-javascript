// nexted function and also function declearation 
function outerFunction(){
	console.log("outer function");
	function innerFunction(){
		console.log("inner function");
	}
	innerFunction();
}
outerFunction();


 
function outerFunction(numOne,numTwo){
	console.log("outer function");
	function innerFunction(secondNum){
		return numOne * secondNum;
	}
	return innerFunction(numTwo);
}
console.log(outerFunction(5,2));

//Arrow function 

const result = (numOne,numTwo) =>{
	return numOne + numTwo
}		
console.log(result(2,3))

function calculate(){
	return{
		add:function(a,b){
			return a + b;
		},
		subtract:(a,b) =>{ 
			return a - b
		}
	}
}

let resultCal = calculate();
console.log(resultCal.add(5,2))
console.log(resultCal.subtract(5,2))
