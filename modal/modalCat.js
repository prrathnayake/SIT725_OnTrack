let { client } = require("../dbConnection.js");

const myDB = client.db("Deakin");
const myColl = myDB.collection("Cats");

async function addCat(title, path, link, description) {
  await client.connect();

  const result = await myColl.insertOne({
    title: title,
    path: path,
    link: link,
    description: description,
  });

  await client.close();
}

async function getAllCats() {
  await client.connect();
  let result = await myColl.find().toArray();
  await client.close();
  return result;
}

module.exports = { addCat, getAllCats };
