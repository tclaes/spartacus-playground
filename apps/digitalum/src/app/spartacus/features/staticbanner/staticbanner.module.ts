import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticbannerComponent } from './staticbanner.component';
import { provideCmsStructure } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [StaticbannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        StaticBanner: {
          component: StaticbannerComponent,
        },
      },
    } as CmsConfig),
  ],
  providers: [
    provideCmsStructure({
      componentId: 'StaticBanner',
      pageSlotPosition: 'StaticBannerSlot',
    }),
  ],
})
export class StaticbannerModule {}
