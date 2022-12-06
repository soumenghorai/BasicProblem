let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= i; k++) {
    string += k;
  }
  string += "\n";
}
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 1; k <= n - i; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);