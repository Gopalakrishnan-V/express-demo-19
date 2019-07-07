const auth = (req, res, next) => {
  console.log("req.headers", req.headers);
  const x_auth_token = req.headers.x_auth_token;

  console.log("x_auth_token", x_auth_token);
  if (x_auth_token === "78taudgas7dtas7dyasdya") {
    next();
  } else {
    res.status(401).send({ message: "Your token is invalid" });
  }
};

module.exports.auth = auth;
module.exports.port = 2345;
