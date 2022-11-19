let n = 5;

let string = "";
for(let i = 0; i<n; i++){
    for(let j = 0; j<i; j++){
        string += " ";
    }
    for(let k = 0; k<2 * (n-i) - 1; k++){
        if(i == 0 || i == n){
            string += "*";
        }
        else{
            if(k == 0 || k == 2 * (n-i) - 2){
                string += "*";
            }
            else{
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);