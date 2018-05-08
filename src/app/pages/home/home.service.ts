
import { Injectable } from '@angular/core';
import {HOMECONTENT, SLIDESHOW} from './home.data';
@Injectable()
export class HomeService {
  getSlideshow() {
    return Promise.resolve(SLIDESHOW);
  }
  getHomeContent() {
    return Promise.resolve(HOMECONTENT);
  }
  constructor() { }

}
