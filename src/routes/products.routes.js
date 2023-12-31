import { Router } from "express";
import { createProduct, deleteProductById, getProductById,
        getProducts, updateProductById } from "../controllers/products.controller";
import { authJwt } from '../middlewares';

const router = Router();

router.get('/', getProducts);
router.post('/', [ authJwt.verifyToken, authJwt.isModerator ], createProduct);
router.get('/:id', getProductById);
router.patch('/:id', [ authJwt.verifyToken, authJwt.isAdmin ], updateProductById);
router.delete('/:id', [ authJwt.verifyToken, authJwt.isAdmin ], deleteProductById);

export default router;