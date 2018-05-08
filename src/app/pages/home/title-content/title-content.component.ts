import {Component, Input, OnInit} from '@angular/core';
import {TitleContent} from '../home.data';

@Component({
  selector: 'title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.css']
})
export class TitleContentComponent implements OnInit {
@Input() titleConData: TitleContent
  constructor() { }

  ngOnInit() {
  }

}
