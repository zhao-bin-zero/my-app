
import { Injectable } from '@angular/core';
import {NAVIGATION, LOGOIMG, CONTACTUS} from './page.data';
@Injectable()
export class PageService {
  getNavigation() {
    return Promise.resolve(NAVIGATION);
  }
  getLogoImg() {
    return Promise.resolve(LOGOIMG);
  }
  getContactUs() {
    return Promise.resolve(CONTACTUS);
  }

  constructor() { }

}
