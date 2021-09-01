import { Component } from '@angular/core';
import { Product, ProductSearchService, RoutingService } from '@spartacus/core';
import { filter, pluck, take } from 'rxjs/operators';

@Component({
  selector: 'spartacus-nx-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.scss'],
})
export class MySalesComponent {
  constructor(
    private routingService: RoutingService,
    private productSearchService: ProductSearchService
  ) {}

  goToRandomProduct() {
    this.productSearchService.search('cam');
    this.productSearchService
      .getResults()
      .pipe(
        // eslint-disable-next-line no-prototype-builtins
        filter((res) => res.hasOwnProperty('products')),
        pluck('products'),
        take(1)
      )
      .subscribe((products: any) => {
        const randomProduct =
          products[Math.floor(Math.random() * products.length)];

        this.routingService.go({
          cxRoute: 'product',
          params: { code: randomProduct.code, nameForUrl: randomProduct.name },
        });
      });
  }
}
