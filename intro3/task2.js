// tampilkan semua bulan dengan map

const Wait = () => console.log('Tunggu Sebentar. Sedang mengambil data bulan')

const getAllMonth = (callback) => {
  setTimeout(() => {
      let error = true;
      let month = ["January", "February", "March", "April", "May", "Juni", "July", "August", "September", "October", "November", "Desember"];

      if (!error) {
        callback(null, month)
      } else {
        callback(new Error("Sorry Data Not Found"), [])
      }
    },
    4000)
}

Wait();

getAllMonth((err, result) => {
  if (!err) {
    result.map((m) => console.log(m))
  } else {
    console.log(err.message);
  }
})




// percobaan 1 - tanpa callback parameter 2
// const Wait = () => console.log('Tunggu Sebentar. Sedang mengambil data bulan')

// const getAllMonth = (callback) => {
//   setTimeout(() => {
//     let error = true
//     let month = ["January", "February", "March", "April", "May", "Juni", "July", "August", "September", "October", "November", "Desember"];
//     if (!error && month != "") {
//       return getMonth = month.map((m) => console.log(m))
//       callback(month)
//     } else {
//       callback("Sorry Data Not Found")
//     }
//   }, 4000)
// }

// const showMonth = (result) => {
//   console.log(result)
// }

// Wait()

// getAllMonth(showMonth)