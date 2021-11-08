const express = require("express");
const port = process.env.PORT || 2000;

const app = express();
app.use(express.json());

app.get("/monsters", (req, res) => {
  const arr = [
    {
      name: "Abanoub",
      id: "215",
    },
    {
      name: "Mena",
      id: "sd5",
    },
    {
      name: "Teena",
      id: "asap",
    },
    {
      name: "Mother",
      id: "sda7",
    },
    {
      name: "Father",
      id: "78aw",
    },
    {
      name: "Hathoot",
      id: "ytq",
    },
    {
      name: "Afrooto",
      id: "wq8",
    },
    {
      name: "koktail",
      id: "aw887w",
    },
    {
      name: "Afrakoosh",
      id: "as88wi",
    },
    {
      name: "Zombie",
      id: "uytw8",
    },
  ];

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.send(arr);
});

app.listen(port, () => {
  console.log("Server is launched up at 2000");
});
