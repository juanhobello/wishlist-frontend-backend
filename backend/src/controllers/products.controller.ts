import { Request, Response } from "express";
import { ProductService } from "../services/products.service";
import { ProductResponseDto } from "../dto/products.dto";

const productService = new ProductService();

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products: ProductResponseDto[] =
      await productService.getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const product: ProductResponseDto | null =
      await productService.getProductById(id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
