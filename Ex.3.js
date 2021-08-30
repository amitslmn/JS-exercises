const num = 0
var absolute;
function absoluteNumber(num){
    if (num==0){
        return "0" ;
    }
    if (num<0){
        absolute = num * (-1) ;
        return absolute ; 
    }
    else {
        return num ;
    }
}
console.log(absoluteNumber(num));

