import { Component, OnInit } from '@angular/core';
import {PageService} from '../page.service';
import {LogoImg, Navigation} from '../page.data';

@Component({
  selector: 'zero-header-nav',
  templateUrl: './zero-header.component.html',
  styleUrls: ['./zero-header.component.css'],
  providers: [ PageService ]
})
export class ZeroHeaderComponent implements OnInit {
  navigation: Navigation[];
  logo: LogoImg;
  constructor(private pageService: PageService) {}
  getNavigationData() {
    this.pageService.getNavigation().then(
      navigation => this.navigation = navigation
    );
  }
  getLogoImgData() {
    this.pageService.getLogoImg().then(
      logo => this.logo = logo
    );
  }

  ngOnInit() {
    this.getNavigationData();
    this.getLogoImgData();
  }
}
