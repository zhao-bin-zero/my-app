import { Component, OnInit } from '@angular/core';
import {OurServices, TitleContent} from '../home.data';
import {HomeService} from '../home.service';

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
  providers: [ HomeService ]
})
export class OurServicesComponent implements OnInit {
  titleContent: TitleContent;
  ourService: OurServices;
  constructor(private homeService: HomeService) { }
  getOurServicesData() {
    this.homeService.getHomeContent().then(
      data => { this.ourService = data.ourServices; this.titleContent = data.ourServices.titleContent; }
    );
  }
  downloadExe(url) {
    if (url !== '') {
      location.href = url;
    }
  }
  ngOnInit() {
    this.getOurServicesData();
  }

}
