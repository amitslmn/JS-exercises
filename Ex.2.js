
const a = 1; b = 5; c = 6;  
var solutionA = 0;
var solutionB = 0;
function quadraticEquation(a,b,c){
    
    solutionA = ((-1*b) + Math.sqrt(b**2-(4*a*c)))/(2*a) 
    solutionB = ((-1*b) - Math.sqrt(b**2-(4*a*c)))/(2*a) 
    console.log(solutionA,solutionB)

} 


quadraticEquation(a,b,c)

