import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import DefaultProducts from '../initData';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProducts(): Product[] {
    const products = [];
    DefaultProducts.forEach((prod) => {
      products.push(
        new Product(prod.id, prod.name, prod.price, prod.available, prod.rating)
      );
    });
    return products;
  }
}
