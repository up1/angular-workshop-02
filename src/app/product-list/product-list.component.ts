import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
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
    this.products = [
      new Product('4342', 'Macbook Pro', 34003.32, true, 2.1),
      new Product('4342', 'iPhone 43', 234234.342, true, 24),
      new Product('4342', 'Airplane', 3432.333, false, 0.5),
    ];
  }

  ngOnInit(): void {}
}
