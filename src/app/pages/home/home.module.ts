import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TitleContentComponent } from './title-content/title-content.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OfficialPartnerComponent } from './official-partner/official-partner.component';

const PAGES_COMPONENTS = [
  HomeComponent,
  SlideshowComponent,
  LearnMoreComponent,
  OurServicesComponent,
  TitleContentComponent,
  AboutUsComponent,
  OfficialPartnerComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
