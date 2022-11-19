let n = 5;

let string = "";
for( let i = 0; i<n; i++){
    for(let j = 1; j<=n-i; j++){
        string += j;
    }
    string += "\n";
}
console.log(string);