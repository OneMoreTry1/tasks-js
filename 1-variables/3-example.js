let a = 5;

function myFunc() {
  a = 10;
}

console.log(a); // ?? 5 or 10
myFunc();
console.log(a); // ?? 5 or 10
