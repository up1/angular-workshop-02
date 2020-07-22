import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() {

  }

  ngOnInit(): void {
    const p1 = new Product('aaa', '01', 'Name 01', 50.25, true, 10);
    const p2 = new Product('bbb', '02', 'Name 02', 150.00, true, 8);
    const p3 = new Product('ccc', '03', 'Name 03', 60.255, true, 9.4);
    this.products.push(p1, p2, p3);
  }

}
