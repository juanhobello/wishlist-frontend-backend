import { Router } from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

export default router;
