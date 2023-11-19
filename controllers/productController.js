const Product = require("../models/Product");
const ObjectId = require("mongoose").Types.ObjectId; //to check if ID is of correct type

//GET all
const getAllProducts = (req, res) => {
  Product.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

//GET by ID
const getProductById = (req, res) => {
  if (ObjectId.isValid(req.params.id) == false) {
    res.status(400).json({ error: "Given object ID is not valid" });
  } else {
    Product.findById(req.params.id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res
            .status(404)
            .json({ error: "No record with given ID: " + req.params.id });
        }
      })
      .catch((err) => console.log(err));
  }
};

//POST
const createProduct = (req, res) => {
  Product.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => console.log(err));
};

//PUT by ID
const updateProduct = (req, res) => {
  if (ObjectId.isValid(req.params.id) == false) {
    res.status(400).json({ error: "Given object ID is not valid" });
  } else {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res
            .status(404)
            .json({ error: "No record with given ID: " + req.params.id });
        }
      })
      .catch((err) => console.log(err));
  }
};

//DELETE by ID
const deleteProduct = (req, res) => {
  if (ObjectId.isValid(req.params.id) == false) {
    res.status(400).json({ error: "Given object ID is not valid" });
  } else {
    Product.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (data) {
          res.json({ message: "Product deleted successfully" });
        } else {
          res
            .status(404)
            .json({ error: "No record with given ID: " + req.params.id });
        }
      })
      .catch((err) => console.log(err));
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
};
