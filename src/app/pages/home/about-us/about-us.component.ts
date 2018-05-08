import { Component, OnInit } from '@angular/core';
import {AboutUs, TitleContent} from '../home.data';
import {HomeService} from '../home.service';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [ HomeService ]
})
export class AboutUsComponent implements OnInit {
  titleContent: TitleContent;
  aboutUs: AboutUs
  constructor(private homeService: HomeService) { }
  getAboutUsData() {
    this.homeService.getHomeContent().then(
      data => { this.aboutUs = data.aboutUs; this.titleContent = data.aboutUs.titleContent; }
    );
  }
  ngOnInit() {
    this.getAboutUsData()
  }

}
