import { Injectable } from '@angular/core';
import { Product } from './models/product';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    const p1 = new Product('00', 'name 01', 1000);
    p1.rating = 5;
    const p2 = new Product('00', 'name 01', 1000);
    const p3 = new Product('00', 'name 01', 1000);
    const ps: Product[] = [];
    ps.push(p1, p2, p3);
    return of(ps);
    // return this.http.get<Product[]>(
    //   'https://product.free.beeceptor.com/products2'
    // );
  }
}
