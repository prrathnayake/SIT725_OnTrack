var expect = require("chai").expect;
var request = require("request");

describe("Testing APIs on http://localhost:3000/cat", function () {
  var url = "http://localhost:3000/cat";
  let cat = {
    title: "title",
    description: "description",
    path: "path",
    link: "link",
  };

  it("GET method returns status 200 to check if API works", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("GET method returns an array to check if API works", function (done) {
    request(url, function (error, response, body) {
      let resObj = JSON.parse(body);
      expect(resObj.result).to.be.an("array");
      done();
    });
  });

  it("POST method validate status code", function (done) {
    request.post({ url: url, form: cat }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("POST method validate body object", function (done) {
    request.post({ url: url, form: cat }, function (error, response, body) {
      let resObj = JSON.parse(body);
      expect(resObj)
        .to.have.property("result")
        .to.equal("Added Data Successfully");
      expect(resObj).to.have.property("statusCode").to.equal(200);

      done();
    });
  });

  it("POST method validate body result message", function (done) {
    request.post({ url: url, form: cat }, function (error, response, body) {
      let resObj = JSON.parse(body);
      expect(resObj.result).to.equal("Added Data Successfully");
      done();
    });
  });
});
