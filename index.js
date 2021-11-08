const express = require("express");
const port = process.env.PORT || 2000;

const app = express();
app.use(express.json());

app.get("/monsters", (req, res) => {
  const arr = [
    {
      name: "Abanoub",
      id: "215",
      email: "aop4ever@gmail.com",
    },
    {
      name: "Mena",
      id: "sd5",
      email: "aosfsa@gmail.com",
    },
    {
      name: "Teena",
      id: "asap",
      email: "ateenr@gmail.com",
    },
    {
      name: "Mother",
      id: "sda7",
      email: "anmamaer@gmail.com",
    },
    {
      name: "Father",
      id: "78aw",
      email: "father@gmail.com",
    },
    {
      name: "Hathoot",
      id: "ytq",
      email: "adsad5ver@gmail.com",
    },
    {
      name: "Afrooto",
      id: "wq8",
      email: "sadiiw11@gmail.com",
    },
    {
      name: "koktail",
      id: "aw887w",
      email: "sdsiauw45w@gmail.com",
    },
    {
      name: "Afrakoosh",
      id: "as88wi",
      email: "sadsad555ar@gmail.com",
    },
    {
      name: "Zombie",
      id: "uytw8",
      email: "wjopam44fa8@gmail.com",
    },
  ];

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.send(arr);
});

app.listen(port, () => {
  console.log("Server is launched up at 2000");
});
