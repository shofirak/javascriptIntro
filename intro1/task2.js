// Menghitung rata-rata UN dengan validasi semua nilai harus diisi
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 89;

let hasil;

if (typeof mtk === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa === 'number') {
  hasil = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

  if (hasil >= 90 && hasil <= 100) {
    console.log(`Rata-rata = ${hasil}
  Grade = A`);
  } else if (hasil >= 80) {
    console.log(`Rata-rata = ${hasil}
  Grade = B`);
  } else if (hasil >= 70) {
    console.log(`Rata-rata = ${hasil}
  Grade = C`);
  } else if (hasil >= 60) {
    console.log(`Rata-rata = ${hasil}
  Grade = D`);
  } else {
    console.log(`Rata-rata = ${hasil}
  Grade = E`);
  }
} else {
  console.log('Semua Nilai harus diisi!');
}