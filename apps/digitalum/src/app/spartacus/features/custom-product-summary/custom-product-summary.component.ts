import { Component, NgModule } from '@angular/core';
import { ProductSummaryComponent } from '@spartacus/storefront';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spartacus-nx-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrls: ['./custom-product-summary.component.scss'],
})
export class CustomProductSummaryComponent extends ProductSummaryComponent {}

// This is needed because CommonModule doesn't get fetched correctly by angular when a component is lazy loaded
// @NgModule({
//   imports: [CommonModule],
//   declarations: [CustomProductSummaryComponent],
// })
// export class CustomProductSummaryModule {}
