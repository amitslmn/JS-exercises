const num = 123
let sum = 0
function splitToDigit(n){
    return (n + '').split('').map((i) => { return Number(i); })
  }
  var arr = splitToDigit(num) ;
  sum = arr[0] +arr[1] +arr[2] ;
  
console.log(sum) 
