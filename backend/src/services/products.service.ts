import { Product } from "../models/products.model";
import { ProductRepository } from "../repositories/products.repository";

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }
  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    const product = await this.productRepository.findById(id);

    if (!product || !product.available) {
      return null;
    }

    return product;
  }

  async getPaginatedProducts(page: number, limit: number){
    const allItems = await this.productRepository.findAll();

    const totalItems = allItems.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const products = allItems.slice(startIndex, endIndex);

    return {
      page,
      limit,
      totalItems,
      totalPages,
      items: products,
    };
  }
}
