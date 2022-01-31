import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'remove2products'
})
export class Remove2productsPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    let i: number = 0;
    let end: number = value.length;
    let aux: Product[] = value;

    while (aux.length !== 0 && i < end) {
      let product: Product = aux[i];
      aux = this.removeDouble(product, aux);
      end = aux.length;
      i++;
    }
    return aux;
  }

  removeDouble(product: Product, products: Product[]): Product[] {
    let aux: Product[] = products.filter(p => p.id !== product.id);
    aux.unshift(product);
    return aux
  }

}
