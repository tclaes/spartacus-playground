import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySalesComponent } from './my-sales.component';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MySalesComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SalesDetailsComponent: {
          component: () =>
            import('./my-sales.component').then((m) => m.MySalesComponent),
        },
      },
    } as CmsConfig),
    RouterModule,
    UrlModule,
  ],
})
export class MySalesModule {}
