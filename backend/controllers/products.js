const Product = require("../models/Product");

// get products
// GET /products
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();

        return res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server error",
        });
    }
};

// get products
// GET /products/:id
// exports.getUser = async (req, res, next) => {
// try {

// } catch (error) {

// }

// add products
// POST /products
exports.addProduct = async (req, res, next) => {
    try {
        const {
            title,
            description,
            price,
            image,
            status,
            keywords,
            sellerId,
            buyerId,
            category,
            shipping,
        } = req.body;
        const product = await Product.create(req.body);
        return res.status(201).json({
            success: true,
            data: product,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: `Server error: ${err}`,
        });
    }
};

// delete products
// DELETE /products/:id
exports.deleteProduct = async (req, res, next) => {
    res.send("DELETE product");
};
