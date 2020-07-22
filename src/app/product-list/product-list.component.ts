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
  numberOfProduct: number = 0;
  filterKeyWord: string = '';

  constructor(private service: ProductService) {}

  onRatingClicked(rating: string) {
    alert(`Rating is ${rating}`);
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.numberOfProduct = data.length;
      console.log(data);
    });
  }
}
