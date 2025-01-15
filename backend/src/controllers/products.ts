import { Request, Response } from "express";
import { ProductService } from "../services/products";

const productService = new ProductService();

export const getAllProducts = (req: Request, res: Response) => {
  const products = productService.getAllProducts();
  console.log(products);
  res.json(products);
};

export const getProductById: (req: Request, res: Response) => void = (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const product = productService.getProductById(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};
