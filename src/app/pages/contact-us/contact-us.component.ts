import { Component, OnInit } from '@angular/core';
import {PageService} from '../page.service';
import {ContactUs} from '../page.data';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [ PageService ],
})
export class ContactUsComponent implements OnInit {
  contactUs: ContactUs;
  constructor(private pageService: PageService) { }
  getContactUs() {
    this.pageService.getContactUs().then(
      data => { this.contactUs = data; }
    );
  }
  ngOnInit() {
    this.getContactUs();
  }

}
