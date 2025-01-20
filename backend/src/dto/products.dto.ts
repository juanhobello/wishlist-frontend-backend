import { Product } from "../models/products.model";

export class ProductResponseDto {
  readonly code: string;
  readonly name: string;
  readonly available: boolean;
  readonly visible: boolean;
  readonly details: {
    name: string;
    description: string;
  };
  readonly fullPriceInCents: string;
  readonly salePriceInCents: string;
  readonly rating: number;
  readonly image: string;
  readonly stockAvailable: boolean;

  constructor(
    code: string,
    name: string,
    available: boolean,
    visible: boolean,
    details: { name: string; description: string },
    fullPriceInCents: string,
    salePriceInCents: string,
    rating: number,
    image: string,
    stockAvailable: boolean
  ) {
    this.code = code;
    this.name = name;
    this.available = available;
    this.visible = visible;
    this.details = details;
    this.fullPriceInCents = fullPriceInCents;
    this.salePriceInCents = salePriceInCents;
    this.rating = rating;
    this.image = image;
    this.stockAvailable = stockAvailable;
  }
}

export class PaginatedProductResponseDto {
  readonly page: number;
  readonly limit: number;
  readonly totalItems: number;
  readonly totalPages: number;
  readonly items: Product[];

  constructor(
    page: number,
    limit: number,
    totalItems: number,
    totalPages: number,
    items: Product[]
  ) {
    this.page = page;
    this.limit = limit;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
    this.items = items;
  }
}