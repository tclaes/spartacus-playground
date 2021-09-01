import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

interface ProductForUrl extends Product {
  nameForUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductNameNormalizer implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target: ProductForUrl): ProductForUrl {
    if (source.name) {
      target.nameForUrl = source.name.replace(/ /g, '-');
    }
    return target;
  }
}
