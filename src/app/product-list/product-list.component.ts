import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import DefaultProducts from '../initData';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterKeyWord: string = '';

  productFilterData: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.getAllProducts();
  }
}
