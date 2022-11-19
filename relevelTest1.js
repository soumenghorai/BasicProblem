function ConvertSingle(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > 9){
            arr[i] = add(arr[i]);
        }
    }
    // return arr
    console.log(arr);
}
function add(num){
    while(num > 9){
        num = num % 10 + parseInt(num / 10);
     }
     return num;
}
ConvertSingle([1,2,3,5,12,15,19]);
/*
let inp = readline().split(' ');

const ConvertSingle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        	 // use process.stdout.write("hello") to print the output
  	 //implement your  logic here - you don't have to return anything, print the output here
    }
    return arr;
}

const add = (num) => {
    while (num > 9) {
        	 // use process.stdout.write("hello") to print the output
  	 //implement your  logic here - you dont have to return anything, print the output here
    }
    return num;
}

let op = ConvertSingle(inp);
console.log(op.join(' '));
*/
