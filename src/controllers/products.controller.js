import Product from "../models/Product";

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body;
    const newProduct = new Product({name, category, price, imgURL});
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
};

export const updateProductById = (req, res) => res.json('Actualizando producto');

export const deleteProductById = (req, res) => res.json('Borrando producto');