const express = require("express");
const router = express.Router();

const Products = require("../../db/products");

router.get("/", (req, res) => {
    Products.find()
        .then(products => {
            console.log("GET HERE")
            res.json(products);
        })
        .catch(err => {
            res.json("This is the error: ", err)
        })
});

module.exports = router;