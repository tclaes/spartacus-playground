import { NgModule } from '@angular/core';
import {
  ProductCategoryNormalizer,
  ProductNameNormalizer,
} from '@spartacus-nx/normalizers';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  CmsConfig,
  DeferLoadingStrategy,
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  PRODUCT_NORMALIZER,
  provideConfig,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductNameNormalizer,
      multi: true,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductCategoryNormalizer,
      multi: true,
    },
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.0',
      },
    }),
    provideConfig(<CmsConfig>{
      featureModules: {
        customProductSummary: {
          module: () =>
            import(
              './features/custom-product-summary/custom-product-summary.module'
            ).then((m) => m.CustomProductSummaryModule),
          cmsComponents: ['ProductSummaryComponent'],
        },
      },
    }),
    provideConfig({
      deferredLoading: {
        strategy: DeferLoadingStrategy.DEFER,
        intersectionMargin: '50px',
      },
      pwa: {
        enabled: true,
        // addToHomeScreen: true,
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
