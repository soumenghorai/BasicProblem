// let n = parseInt(readline());

function isPowerOfFour(n){
    //write your logic here, return the output
	if(n == 0)
    return false;
  while(n != 1)
  {   
   if(n % 4 != 0)
      return false;
    n = n / 4;     
  }
  return true;
}
let n = 16
console.log(isPowerOfFour(n));