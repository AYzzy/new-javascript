const counter = {
	 count:0,
	step:1,
	increase: function(){
		return this.count += this.step
	},
	decrease: function(){
		return this.count -= this.step
	}
	
}

console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.decrease())