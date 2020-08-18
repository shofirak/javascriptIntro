// reverse kata palindrom
const reverse = text => {

  // pengkondisian inputan string
  if (!text) {
    console.log("Data harus diisi!")
  } else if (typeof text === 'string') {

    const newText = text.split("");
    const reverse = text.split("").reverse().join();

    // pengkondisian palindrom
    if (newText == reverse) {
      console.log("Palindrom");
    } else {
      console.log("Not Palindrom");
    }

  } else {
    console.log("Data yang diinputkan harus berupa string")
  }
}

reverse('true')