// buat function untuk mencari data yang nilainya diantara kedua parameter dan diurutkan

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal >= nilaiAkhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal!");
  } else if (dataArray.length < 5) {
    console.log("Data array kurang dari lima!");
  } else {
    let seleksi = dataArray.filter(
      (value) => value > nilaiAwal && value < nilaiAkhir
    );
    // pengkondisian ada tidaknya output
    if (seleksi != "") {
      console.log(seleksi.sort((a, b) => a - b));
    } else {
      console.log("Tidak ada output yang ditampilkan");
    }
  }
};

seleksiNilai(5, 20, [2, 25, 14, 17, 4, 30, 8]);
