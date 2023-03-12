const { default: mongoose } = require("mongoose");

require('dotenv').config();

console.log(process.env.PORT);

const MONGODB_URL = process.env.MONGODB_URL;

exports.connet = () => {
  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Database connected successfully'))
  .catch((err) => {
    console.log('Database connection failed');
    console.log(err);
    process.exit(1);
  })
};
