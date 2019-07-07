const express = require("express");
const bodyParser = require("body-parser");
const { auth } = require("./middlewares/Auth");

const app = express();
const port = process.env.port || 9000;

const student = {
  name: "Gopal",
  age: 22,
  company: "UN"
};

// const company = student.company;
// const age = student.age;

const { name, age } = student;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Received asd asdas" });
});

app.get("/songs/:songId", auth, (req, res) => {
  //Request params
  //   console.log("req.params", req.params);
  //Request query
  //   console.log("req.query", req.query);
  //Request Body
  //   console.log("req.body", req.body);

  if (req.params.songId === "abcd") {
    return res
      .status(404)
      .send({ message: "Song you are looking for is not available" });
  }
  res.send({ message: "Song " + req.params.songId + " will start soon" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
