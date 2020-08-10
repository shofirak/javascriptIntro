let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const hobby = ["menonton film", "menggambar"];

// mengubah value dari data yg tertera dan menambahkan key baru pakai spread operator
const update = {
  ...data,
  name: "Shofira",
  email: "shofirakhairunnisa@gmail.com",
  hobby,
};

console.log(update);

// mengambil data street dan city dengan destructuring
const { street, suite, city, zipcode } = data.address;

console.log(`${street} dan ${city}`);
