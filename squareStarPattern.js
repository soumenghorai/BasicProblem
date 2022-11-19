let n = 5; // row count
let m = 5; // column count
// defining an empty string
let string = "";

for (let i = 1; i <= n; i++) { // external loop
    for (let j = 1; j <= m; j++) { // internal loop
        string += "*";
    }
    // newline after each row
    string += "\n";
}
// printing the string
console.log(string);