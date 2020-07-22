import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productView?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const code = params.get('code');
      this.productService.getProduct(code).subscribe((s) => {
        this.productView = s;
      });
    });
  }

  onRatingClicked(rating: string) {
    alert(`Rating is ${rating}`);
  }
}
