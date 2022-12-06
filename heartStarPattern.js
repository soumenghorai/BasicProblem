let n = 6;
let string = "";

for (let i = n / 2; i < n; i += 2) {
  for (let j = 1; j < n - i; j += 2) {
    string += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    string += "*";
  }
  for (let j = 1; j < n - i + 1; j++) {
    string += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
