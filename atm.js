function totalLenght(param){
	let removeHypen = "";
	for(let count =1; count <= param.length ; count++){
		if(param[count] != "-"){
			removeHypen += param[count]
		}
	}
	if (removeHypen.length[0] == "4" || removeHypen.length[0] =="5" || removeHypen.length[0] == "6" && removeHypen.length == 16 ){
			return true
	}
	else{
		return false
	}
 
	                                                                                                                                                                                                                                                                                                       
}

console.log(totalLenght("4234-5678-1234-5678"))