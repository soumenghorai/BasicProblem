let n = 6;

let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        string += " ";
    }
    for (let k = 0; k < i; k++) {
        if (i == n) {
            string += "*";
        }
        else {
            if (k == 0 || k == i-1) {
                string += "*";
            }
            else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);