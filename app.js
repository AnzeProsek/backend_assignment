const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./db.js");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/products", productRoutes);

//first we connect to the db, then we start the server
connectDb()
  .then(() => {
    console.log("db connection succeeded");
    app.listen(3000, () => console.log("server started at 3000"));
  })
  .catch((err) => console.log(err));
