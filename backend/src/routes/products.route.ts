import { Router } from "express";
import {
  getAllProducts,
  getPaginatedProducts,
  getProductById,
} from "../controllers/products.controller";

const router = Router();

router.get("/products/paginated", getPaginatedProducts);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

export default router;
