  
const num = 999
let sum = 0
function splitToDigit(num){
    let num100 = Math.floor(num/100) ;
    let num10 = Math.floor(num/10) - (num100*10) ;
    let num1 = num - (num100*100 + num10*10);
  	return sum = num100 + num10 + num1 ;
  
}
console.log(splitToDigit(num)) 