import data from "../data/mock-products.json";
import { Request, Response, Router } from 'express';

export class ProductService {
  getAllProducts() {
    return data.products;
  }

  getProductById(id: string) {
    return data.products.find((product) => product.code === id);
  }
}
