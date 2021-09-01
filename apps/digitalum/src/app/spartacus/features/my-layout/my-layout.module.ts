import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLayoutComponent } from './my-layout.component';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

@NgModule({
  declarations: [MyLayoutComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
          lg: {
            slots: ['StaticBannerSlot', 'Section1', 'Section5', 'Section4'],
          },
          slots: ['Section5', 'Section4'],
        },
      },
    } as LayoutConfig),
  ],
})
export class MyLayoutModule {}
