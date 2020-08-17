// buat 2 program bebas dengan promise

// 1. tentukan kelulusan jika rata' nilai >= 75
// const nilai = [80, 75, 90, 77];

// const seleksi = new Promise((resolve, reject) => {
//   const result = nilai.reduce((a, b) => a + b) / 4;

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
//     console.log(`Maaf Anda harus mengulang kelas dengan rata-rata nilai ${error}`);
//   });

// 2. search name

const name = ["Budi", "Dodi", "Alek", "Caca", "Edi"];

const searchName = (a) => {
  new Promise((resolve, reject) => {
    const show = name.filter((value) => value.includes(a));

    if (!show) {
      reject("no data displayed");
    } else {
      resolve(show);
    }
  });
};

searchName("Alek")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });