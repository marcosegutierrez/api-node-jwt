import { Router } from "express";
import { createProduct, deleteProductById, getProductById,
        getProducts, updateProductById } from "../controllers/products.controller";
import {authJwt} from '../middlewares';
const router = Router();

router.get('/', getProducts);
router.post('/', authJwt.verifyToken, createProduct);
router.get('/:id', getProductById);
router.patch('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export default router;