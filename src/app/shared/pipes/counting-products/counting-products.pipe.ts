import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'countingProducts'
})
export class CountingProductsPipe implements PipeTransform {

  transform(value: number, product: Product, products: Product[]): number {
    return this.howManyTimes(product, products);
  }

  howManyTimes(product: Product, products: Product[]): number {
    let counter: number = 0;
    for (let i = 0; i < products.length; i++) {
      if (product.id === products[i].id) {
        counter++;
      }
    }
    return counter;
  }

}
