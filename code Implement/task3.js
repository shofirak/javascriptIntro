// 0 sebagai pemisah dan urutkan bilangan berdasar kelompok tersebut

const divideAndSort = num => {
  // pengkondisian input berupa number
  if (typeof num === "number") {
    const newNumber = num.toString().split(0);

    const sequence = newNumber.map((a) =>
      a
      .toString()
      .split("")
      .sort()
      .join("")
    );

    console.log(result = parseInt(sequence.join('')));
  } else {
    console.log("Data yang diinputkan bukan number!");
  }
};

divideAndSort(5956560159466056);

// contoh penggunaan dengan for
// for (let i = 0; i < newNumber.length; i++) {
//   console.log(
//     newNumber[i]
//       .toString()
//       .split("")
//       .sort((a, b) => a - b)
//       .join("")
//   );
// }