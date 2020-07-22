import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import DefaultProducts from '../initData';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const dummy: Product[] = [
      {
        code: 'AA 0001',
        name: 'Product name 1',
        price: 100,
        rating: 5,
        available: false,
        imageUrl:
          'https://th-live-01.slatic.net/original/795870113fb003d6e781310596480060.jpg',
      },
      {
        code: 'BB 0002',
        name: 'Product name 2',
        price: 2000,
        rating: 2,
        available: true,
        imageUrl:
          'https://th-live-01.slatic.net/original/795870113fb003d6e781310596480060.jpg',
      },
      {
        code: 'BB 0003',
        name: 'Product name 3',
        price: 2000,
        rating: 3.5,
        available: true,
        imageUrl:
          'https://th-live-01.slatic.net/original/795870113fb003d6e781310596480060.jpg',
      },
    ];

    return of(dummy);
  }
}
