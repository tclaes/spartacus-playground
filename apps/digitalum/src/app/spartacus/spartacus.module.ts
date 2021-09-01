import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';

@NgModule({
  declarations: [],
  imports: [
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    // Custom layout module
    // MyLayoutModule,
    BaseStorefrontModule,
  ],
  exports: [BaseStorefrontModule],
})
export class SpartacusModule { }
