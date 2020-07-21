export class Product {
  public rating = 1;
  public available: boolean;
  public imageUrl: string;
  constructor(public code: string, public name: string, public price: number) {}
}
