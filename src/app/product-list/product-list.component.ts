import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {
    this.products = [
      new Product('4342', 'Prod 0', 3242, true, 2.1),
      new Product('4342', 'Prod 1', 342, true, 24),
      new Product('4342', 'Prod 3', 322, false, 0.5),
    ];
  }

  ngOnInit(): void {}
}
