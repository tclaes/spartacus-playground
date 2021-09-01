import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestsellersComponent } from './bestsellers.component';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';

@NgModule({
  declarations: [BestsellersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'bestsellers',
        component: BestsellersComponent,
        canActivate: [CmsPageGuard],
        data: { pageLabel: 'homepage' },
      },
    ]),
  ],
})
export class BestsellersModule {}
