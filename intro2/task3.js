// buat function untuk mencari data yang nilainya diantara kedua parameter dan diurutkan

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal >= nilaiAkhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal!");
  } else {
    let seleksi = dataArray.filter(value => value > nilaiAwal && value < nilaiAkhir);
    console.log(seleksi.sort((a, b) => a - b))
  }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);