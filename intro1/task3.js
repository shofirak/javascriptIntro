// looping membuat segitiga dengan bilangan
const printSegitiga = 5;

if (typeof printSegitiga === "number") {
  for (let i = printSegitiga; i >= 1; i--) {
    let a = "";
    for (let j = 1; j <= i; j++) {
      a += j;
    }
    console.log(a);
  }
} else {
  console.log("Data yang diinput harus berupa number!");
}