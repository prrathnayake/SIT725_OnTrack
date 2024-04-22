let express = require("express");
let router = express.Router();
let controllerCat = require("../controller/controllerCat.js");

router.get("/", async function (req, res) {
  let result = await controllerCat.getCat();
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400);
  } else {
    res.json({ result: result, statusCode: 200 }).status(200);
  }
});

router.post("/", function (req, res) {
  let cat = req.body;
  controllerCat.postCat(cat.title, cat.path, cat.link, cat.description);
  res.json({ result:"Added Data Successfully" ,statusCode: 200 }).status(200);
});

module.exports = router;
