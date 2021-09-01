import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

interface ProductCategory extends Product {
  firstCategory?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryNormalizer
  implements Converter<Occ.Product, Product>
{
  convert(source: Occ.Product, target: ProductCategory): ProductCategory {
    if (source.categories && source.categories.length) {
      target.firstCategory = source.categories[0].name
        ?.replace(/ /g, '-')
        .toLowerCase();
      console.log(target.firstCategory);
    }
    return target;
  }
}
