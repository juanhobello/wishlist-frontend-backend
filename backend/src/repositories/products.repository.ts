import data from "../data/mock-products.json";
import { Product } from "../models/products.model";

export class ProductRepository {
  private products: Product[] = data.products;

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find((product) => product.code === id) || null;
  }
}
  