// reverse kalimat
const reverseKalimat = kalimat => {

  // pengkondisian inputan string
  if (typeof kalimat === 'string') {
    const newText = kalimat.split(" ");

    // pengkondisian inputan string
    if (!kalimat) {
      console.log("Data harus diisi!")

    } else if (newText.length > 1) {
      console.log(newText.reverse().join(' '));

    } else {
      console.log("Data yang diinputkan bukan kalimat")
    }

  } else {
    console.log("Data yang diinput harus berupa string!")
  }
}

reverseKalimat('Saya Belajar Javasript')