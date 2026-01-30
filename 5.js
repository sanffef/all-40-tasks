let word = "Да";
let n = 3;
let result = "";

for (let i = 0; i < n; i++) {
    result += word + (i < n - 1 ? " " : "");
}

console.log(result); 