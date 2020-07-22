import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import DefaultProducts from '../initData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterKeyWord: string = '';

  productFilterData: Product[] = [];

  constructor() {
    DefaultProducts.forEach((prod) => {
      this.products.push(
        new Product(prod.id, prod.name, prod.price, prod.available, prod.rating)
      );
    });
  }

  ngOnInit(): void {}
}
