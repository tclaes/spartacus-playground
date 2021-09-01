import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Helpers {
  constructor() {}

  testTranslationsChunkConfig() {
    return {
      common: ['searchBox', 'sorting'],
      cart: ['cartDetails', 'cartItems'],
      product: ['productDetails', 'productList'],
    };
  }
}
