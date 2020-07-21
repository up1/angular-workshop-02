import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAllProoduct(): Product[] {
    const products: Product[] = [];
    const p1 = new Product('01', 'Name 01', 1000.0);
    const p2 = new Product('02', 'Name 02', 2000.5);
    const p3 = new Product('03', 'Name 03', 3000.75);
    products.push(p1, p2, p3);
    return products;
  }
}
