import Product from "../models/Product";

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body;
    const newProduct = new Product({name, category, price, imgURL});
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
};

export const getProducts = (req, res) => res.json('Obteniendo productos');

export const getProductById = (req, res) => res.json('Obteniendo producto por ID');

export const updateProductById = (req, res) => res.json('Actualizando producto');

export const deleteProductById = (req, res) => res.json('Borrando producto');