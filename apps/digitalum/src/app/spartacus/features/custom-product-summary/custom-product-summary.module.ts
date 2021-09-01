import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { CustomProductSummaryComponent } from './custom-product-summary.component';

@NgModule({
  declarations: [CustomProductSummaryComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent,
          // LAZY LOADING OF COMPONENT
          // component: () =>
          //   import('./custom-product-summary.component').then(
          //     (m) => m.CustomProductSummaryComponent
          //   ),
        },
      },
    } as CmsConfig),
  ],
})
export class CustomProductSummaryModule {}
