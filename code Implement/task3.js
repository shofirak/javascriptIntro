// 0 sebagai pemisah dan urutkan bilangan berdasar bilangan itu sendiri

const divideAndSort = (num) => {
  // pengkondisian input berupa number
  if (typeof num === "number") {
    const newNumber = num.toString().split(0);

    for (let i = 0; i < newNumber.length; i++) {
      console.log(
        newNumber[i]
          .toString()
          .split("")
          .sort((a, b) => a - b)
          .join("")
      );
    }
  } else {
    console.log("Data yang diinputkan bukan number!");
  }
};

divideAndSort(5956560159466056);
