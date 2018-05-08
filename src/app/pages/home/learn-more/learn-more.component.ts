import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {LearnMore} from '../home.data';

@Component({
  selector: 'learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css'],
  providers: [ HomeService ]
})
export class LearnMoreComponent implements OnInit {
  learnMore: LearnMore;
  constructor(private homeService: HomeService) { }
  getLenrnMoreData() {
    this.homeService.getHomeContent().then(
      data =>  this.learnMore = data.learnMore
    );
  }
  ngOnInit() {
    this.getLenrnMoreData();
  }

}
