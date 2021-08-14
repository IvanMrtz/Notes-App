module.exports = function (error, req, res, next) {
  switch (error.name) {
    case "CastError":
      res.status(400).send({ error: "invalid id" });
      break;
    case "ValidationError":
      res.status(409).send({ error: error.message });
      break;
    case "JsonWebTokenError":
      res.status(401).send({ error: "token is missed or invalid" });
      break;
    case "TokenExpirerError":
      res.status(401).send({ error: "token expired" });
      break;
    case "defaultError":
      console.error(error.name);
      res.status(500).end();
  }
};
