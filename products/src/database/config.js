require("dotenv").config();

const mongoose = require("mongoose");

exports.connet = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database connected successfully"))
    .catch((err) => {
      console.log("Database connection failed");
      console.log(err);
      process.exit(1);
    });
};
