// searching nama yang dibatasi jumlah outputnya dengan callback
// function

const searchName = (a, b, callback) => {
  const output = name.filter(value => name === a).slice(0, b);
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
searchName("angela", 3, showFilter);