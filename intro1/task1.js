// Membuat object
const biodata = {
  name: "Shofira Khairunnisa",
  age: 18,
  hobbies: ["Menonton film", "menggambar"],
  isMarried: false,
  schoolList: [{
      name: "SD",
      yearIn: 2011,
      yearOut: 2015,
      major: null
    },
    {
      name: "SMP",
      yearIn: 2015,
      yearOut: 2017,
      major: null
    },
    {
      name: "SMK",
      yearIn: 2017,
      yearOut: 2020,
      major: "RPL"
    }
  ],
  skills: [{
      skillName: "HTML CSS",
      level: "advanced"
    },
    {
      skillName: "PHP",
      level: "advanced"
    },
    {
      skillName: "MYSQL",
      level: "advanced"
    }
  ],
  interestInCoding: true
};

console.log(biodata);