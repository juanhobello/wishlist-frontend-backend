import { Expose } from "class-transformer";

export class ProductResponseDto {
  @Expose
  code!: string;
  
  @Expose
  name!: string;

  @Expose
  available!: boolean;

  @Expose
  visible!: boolean;

  @Expose
  details!: {
    name: string;
    description: string;
  };

  @Expose
  fullPriceInCents!: string;

  @Expose
  salePriceInCents!: string;

  @Expose
  rating!: number;

  @Expose 
  image!: string;

  @Expose
  stockAvailable!: boolean;
}