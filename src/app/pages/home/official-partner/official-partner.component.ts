import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {OfficialPartner, TitleContent} from '../home.data';

@Component({
  selector: 'official-partner',
  templateUrl: './official-partner.component.html',
  styleUrls: ['./official-partner.component.css'],
  providers: [ HomeService ]
})
export class OfficialPartnerComponent implements OnInit {
  titleContent: TitleContent;
  officialPartner: OfficialPartner
  constructor(private homeService: HomeService) { }
  getOfficialPartnerData() {
    this.homeService.getHomeContent().then(
      data => { this.officialPartner = data.officialPartner; this.titleContent = data.officialPartner.titleContent; }
    );
  }
  ngOnInit() {
    this.getOfficialPartnerData()
  }

}
