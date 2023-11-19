const mongoose = require("mongoose");

const mongoUri =
  "mongodb+srv://anzeprosek:gimbezigrad275@an-pro.cnwor85.mongodb.net/products_db?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

//this export allows simple connection to the database
module.exports = () => {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
