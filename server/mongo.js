require("dotenv").config();
const mongoose = require("mongoose");
const { URI_ENCODED } = process.env;

mongoose
  .connect(URI_ENCODED, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("¡Connected to DB!"))
  .catch(({ message }) => console.error(message));
