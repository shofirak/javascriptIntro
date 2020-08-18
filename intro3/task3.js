// buat 2 program bebas dengan promise

// 1. tentukan kelulusan jika rata' nilai >= 75
// const nilai = [80, 75, 90, 77];

// const seleksi = new Promise((resolve, reject) => {
//   const result = nilai.reduce((a, b) => a + b) / nilai.length;

//   if (result >= 75) {
//     resolve(result);
//   } else {
//     reject(result);
//   }
// });

// seleksi
//   .then((response) => {
//     console.log(`Selamat, Anda dinyatakan lulus! dengan rata-rata nilai ${response}`);
//   })
//   .catch((error) => {
//     console.log(`Maaf Anda harus mengulang kelas karena rata-rata nilai ${error}`);
//   });



// 2. search name
const name = ["Budi", "Dodi", "Alek", "Caca", "Edi"];

const searchName = (value) => {
  return new Promise((resolve, reject) => {
    const show = name.filter((a) => a.includes(value));

    if (show != "") {
      resolve(show);
    } else {
      reject("no data displayed");
    }
  });
};

searchName("ud")
  .then((response) => {
    console.log(response.join());
  })
  .catch((error) => {
    console.log(error);
  });