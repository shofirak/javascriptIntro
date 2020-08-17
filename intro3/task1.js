// terapkan then catch serta try catch untuk cek hari kerja

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => item === day);
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// menggunakan then catch
// cekHariKerja('senin')
//   .then((response) => {
//     console.log(`Hari ${response} adalah hari kerja`);
//   })
//   .catch((Error) => {
//     console.log(Error);
//   });


// menggunakan try catch
const showDay = async () => {
  try {
    const result = await cekHariKerja("sabtu");
    console.log(`Hari ${result} adalah hari kerja`);
  } catch (error) {
    console.log(error);
  }
};

showDay()