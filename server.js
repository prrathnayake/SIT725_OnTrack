const express = require("express");
const path = require("path");
let cat = require("./routes/routeCat.js");
let index = require("./routes/routerIndex.js");

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cat", cat);
app.use("/", index);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
