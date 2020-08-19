// gunakan method fetch untuk tampilkan semua name dari rest api

const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
  // menggunakan map destructuring  
  .then((res) => res.json()
    .then(result => {
      result.map((item) => {
        const {
          name
        } = item
        console.log(name)
      })
    }).catch((err) => console.log(err))
  )

// menggunakan map
// .then(res => res.map(e => console.log(e.name)))

// menggunakan looping
// .then((res) => {
//   for (let i = 0; i < res.length; i++) {
//     console.log(res[i].name)
//   }
// })