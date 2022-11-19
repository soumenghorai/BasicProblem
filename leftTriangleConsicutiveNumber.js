let n = 5;
let num = 1;
let string = "";
for( let i = 1; i<=n; i++){
    for(let j = 1; j<=i; j++){
        string += num;
        num++;
    }
    string += "\n";
}
console.log(string);