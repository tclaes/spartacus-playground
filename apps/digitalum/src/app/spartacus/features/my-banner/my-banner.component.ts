import { Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { CmsBannerComponent } from '@spartacus/core';

@Component({
  selector: 'spartacus-nx-my-banner',
  templateUrl: './my-banner.component.html',
  styleUrls: ['./my-banner.component.scss']
})
export class MyBannerComponent {

  constructor(public component: CmsComponentData<CmsBannerComponent | any>) {}

}
