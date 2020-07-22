import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';
@Pipe({
  name: 'product',
})
export class ProductPipe implements PipeTransform {
  transform(value: Product[], filterKeyWord: string): Product[] {
    return value.filter(
      (p) => p.name.toUpperCase().indexOf(filterKeyWord.toUpperCase()) != -1
    );
  }
}
