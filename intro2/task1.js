// 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

// 1. split() - mengkonversi ke array
const kata = "Aku makan";
console.log(kata.split(" "));

// 2. concat() - menggabungkan string
const kata1 = "Aku makan";
const kata2 = " nasi";
console.log(kata1.concat(kata2));

// 3. toUpperCase() - mengubah ke huruf kapital
const kalimat = "Aku makan nasi";
console.log(kalimat.toUpperCase());

// 4. toLowerCase() - mengubah ke huruf kecil
const kalimat1 = "Aku makan nasi";
console.log(kalimat.toLowerCase());

// 5. push() - menambahkan elemen di akhir
const array = [1, 2, 3];
array.push(4, 5);
console.log(array);

// 6. reverse() - membalik urutan
const array1 = [1, 2, 3];
console.log(array1.reverse());

// 7. shift() - menghapus elemen pertama
const array2 = [1, 2, 3];
array2.shift();
console.log(array2);

// 8. sort() - mengurutkan elemen array
const kata3 = ["nasi", "makan", "aku"];
console.log(kata3.sort());

// 9. join() - menggabung elemen array jadi string
const kata4 = ["aku", "makan", "nasi"];
console.log(kata4.join(" "));

//  10. toString() - mengembalikan representasi string
const number = 10;
console.log(number.toString());