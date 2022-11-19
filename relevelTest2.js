  // Javascript program to count one's in a boolean array
  function countOnes( arr, low, high)
  {
	if (high >= low)
	{
	  // get the middle index
	  let mid = Math.trunc(low + (high - low)/2);
	
	  // check if the element at middle index is last 1
	  if ( (mid == high || arr[mid+1] == 0) && (arr[mid] == 1))
		return mid+1;
	
	  // If element is not last 1, recur for right side
	  if (arr[mid] == 1)
		return countOnes(arr, (mid + 1), high);
	
	  // else recur for left side
	  return countOnes(arr, low, (mid -1));
	}
	return 0;
  }
	  // Driver program 
		
	 let arr = [ 1, 1, 1, 0, 0, 0, 0 ];
	 let n = arr.length;
	 console.log(countOnes(arr, 0, n-1));
/*
let n = readline().split(' ');

// Function to Find Number of Ones from 0 to N
const findBinaryOne = (binary) => {
 	// use process.stdout.write("hello") to print the output
  	 //implement your  logic here - you dont have to return anything, print the output here
    return result;
}
const output = findBinaryOne(n);
console.log(output.toString());
*/