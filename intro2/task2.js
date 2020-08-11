// searching nama yang dibatasi jumlah outputnya dengan callback
// function

const searchName = (a, b, callback) => {
  const output = name.filter((value) => value.includes(a)).slice(0, b);
  callback(output);
};

const showFilter = (result) => {
  console.log(result);
};

const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

searchName("ll", 3, showFilter);