import { Component, OnInit } from '@angular/core';
import {PageService} from '../page.service';
import {LogoImg, Navigation} from '../page.data';
import { Router} from '@angular/router';

@Component({
  selector: 'zero-header-nav',
  templateUrl: './zero-header.component.html',
  styleUrls: ['./zero-header.component.css'],
  providers: [ PageService ]
})
export class ZeroHeaderComponent implements OnInit {
  navigation: Navigation[];
  logo: LogoImg;
  constructor(private pageService: PageService, private router: Router) {}
  getNavigationData() {
    this.pageService.getNavigation().then(
      navigation => this.navigation = navigation
    );
  }
  navLink(link) {
    if (link.slice(0, 4) === 'http') {
      location.href = link;
    } else {
      this.router.navigateByUrl(link);
    }
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
