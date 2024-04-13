let { addCat, getAllCats } = require("../modal/modalCat.js");

function postCat(title, path, link, description) {
    addCat(title, path, link, description);
}

function getCat() {
    return getAllCats();
}

module.exports = { postCat, getCat };
