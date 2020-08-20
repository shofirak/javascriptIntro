// deteksi kata palindrom
const palindrom = text => {

  // pengkondisian inputan string
  if (!text) {
    console.log("Data harus diisi!")
  } else if (typeof text !== 'string') {

    console.log("Data yang diinputkan harus berupa string")

  } else {

    const newText = text.split("");
    const reverse = text.split("").reverse().join();

    // pengkondisian palindrom
    if (newText == reverse) {
      console.log("Palindrom");
    } else {
      console.log("Not Palindrom");
    }
  }
}

palindrom('malam')