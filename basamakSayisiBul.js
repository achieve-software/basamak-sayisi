// ODEV3 (COZUM): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a
//bastiran kodu donguler yardimiyle yaziniz.

let counter = 0;
let number = Number(prompt("your number:"));
while (number != 0) {
  number = Math.trunc(number / 10);
  counter++;
}
console.log("digit count is " + counter);
