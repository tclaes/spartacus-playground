import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, OccConfig, RoutingConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'cameras/:firstCategory/:manufacturer/:productCode/:name',
              'cameras/:manufacturer/:productCode/:name',
              'cameras/:productCode/:name',
              'cameras/:productCode',
            ],
            paramsMapping: {
              name: 'nameForUrl',
            },
          },
        },
      },
    } as RoutingConfig),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            product: {
              list: 'products/${productCode}?fields=code,name,manufacturer,summary,price(formattedValue),images(DEFAULT,galleryIndex),categories(FULL)',
            },
            // tslint:disable:max-line-length
            productSearch:
              'products/search?fields=products(code,name,manufacturer,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
          },
        },
      },
    } as OccConfig),
  ],
})
export class CustomRoutingModule {}
