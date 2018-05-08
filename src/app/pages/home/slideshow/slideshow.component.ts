import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {Slideshow} from '../home.data';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  providers: [ HomeService ]
})
export class SlideshowComponent implements OnInit {
  slideshowData: Slideshow[];
  constructor(private  homeService: HomeService) {}
  getSlideshowData() {
    this.homeService.getSlideshow().then(
      data => this.slideshowData = data
    );
  }
  ngOnInit() {
    this.getSlideshowData();
  }

}
