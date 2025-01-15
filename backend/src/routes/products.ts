import { Router, Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/products";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

export default router;
