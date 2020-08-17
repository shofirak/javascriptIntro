// gunakan method fetch untuk tampilkan semua name dari rest api

const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].name)
    }
  })