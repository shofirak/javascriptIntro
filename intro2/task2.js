// searching nama yang dibatasi jumlah outputnya dengan callback
// function

const searchName = (a, callback) => {
  const output = name.filter(a);
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
searchName("an", callback);
